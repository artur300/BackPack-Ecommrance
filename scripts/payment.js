import {cartArr,removeFromCart, Update_Delivery_Option,addToCart} from '../scripts/cart.js';
import {getproducts} from '../scripts/products.js';
import {convertMoney} from './utils/money.js';
import {deliveryOp, getDeliveryOptions} from '../scripts/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



import {renderPaymentSummery} from '../scripts/paymentSummery.js';



function renderOrderSummery()
{
    let cartSummeryHTML='';
    cartArr.forEach((cartItem)=>
    {

        const productId=cartItem.productid;

        const matchingProducts=getproducts(productId);
        

        
        const deliveryOptionid=cartItem.deliveryOp;

        const deliveryOption= getDeliveryOptions(deliveryOptionid);

            const today=dayjs();
            const deliveryDate=today.add(deliveryOption.days,'days');
            const datastring =deliveryDate.format('dddd, MMMM D');


        cartSummeryHTML+=`
        <div class="cart-item js-cart-item-${matchingProducts.id}">
            <div class="delivery-details">
                <div id="deliverydate">Delivery date: 
                    <div class="date">${datastring}</div>
                    <div id="frame"></div>
                    <div id="pic"><img src="${matchingProducts.img}" width="auto" height="150px">
                        <div id="name" style="margin-top: 20px;">${matchingProducts.name} 
                            <div id="price">$${convertMoney(matchingProducts.price)}
                                    <div id="q">Quantity: <span id="Quantity">${cartItem.quantity}</span></div>
                                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details">
                <div id="options">
                   ${deliveryOptionHTML(matchingProducts,cartItem)}
                </div>
                
                <div class="move_remove_and_rebuy">
                <div class="remove js-remove" data-id="${matchingProducts.id}"><button id="button_style">Remove</button></div>
                <div class="rebuy js-rebuy" data-id="${matchingProducts.id}"><button id="button_style">Buy Again</button></div>
                </div>
            </div>
            
        </div>
    `;
    });



    function deliveryOptionHTML(matchingProducts,cartItem)
    {
        let html='';
        deliveryOp.forEach((deliveryOption)=>
        {
            const today=dayjs();
            const deliveryDate=today.add(deliveryOption.days,'days');
            const datastring =deliveryDate.format('dddd, MMMM D');
            const priceString=deliveryOption.price===0 ? 'free' : `$${convertMoney(deliveryOption.price)}-`;

           
           const isChecked=deliveryOption.id === cartItem.deliveryOp;

           html+= `<div class="js-delivery-options"
                data-product-id="${matchingProducts.id}"
                data-delivery-id="${deliveryOption.id}">
                                                       
           <input type="radio" id="option1" ${isChecked ? 'checked': ''} name="${matchingProducts.id}">${priceString} Shipping
            <div class="date" id="date1">${datastring} </div>
            </div><br>`

        });

        return html;
    }



    let sum1=0;
    cartArr.forEach((compare)=>
    {
      sum1+=compare.quantity;
    });

    document.querySelector('.js-count').innerHTML=sum1;
    document.querySelector('.js-viewcart').innerHTML=cartSummeryHTML;

    //this removes item 
    document.querySelectorAll('.js-remove').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.id;
            const container = document.querySelector(`.js-cart-item-${productId}`);
    
            
            const cartItem = cartArr.find((item) => item.productid === productId);
    
            
            if (cartItem && cartItem.quantity > 1) 
            {
                
                cartItem.quantity -= 1;
                const quantityElement = container.querySelector('#Quantity');
                
                if (quantityElement) 
                {
                    quantityElement.textContent = cartItem.quantity;
                }
            } 
            else 
            {
                removeFromCart(productId);
                container.remove();
            }
    
            renderPaymentSummery();
    
            let sum1 = 0;
            cartArr.forEach((compare) => {
                sum1 += compare.quantity;
            });
    
            document.querySelector('.js-count').innerHTML = sum1;
        });
    });
    /////////////

    





//this buys again 
document.querySelectorAll('.js-rebuy').forEach((link) => 
{
    link.addEventListener('click', () => {
        const productId = link.dataset.id; 
        
        addToCart(productId);
        

        let sum1=0;
        cartArr.forEach((compare)=>
        {
          sum1+=compare.quantity;
        });
    
        document.querySelector('.js-count').innerHTML=sum1;
        renderOrderSummery();
        renderPaymentSummery();
    });

});
/////////////






















    document.querySelectorAll('.js-delivery-options').forEach((element)=>
    {
            element.addEventListener('click',()=>
            {
                const data_productid=element.dataset.productId;
                const data_deliveryid=element.dataset.deliveryId;
                Update_Delivery_Option( data_productid,data_deliveryid);
                renderOrderSummery();
                renderPaymentSummery();
               
                
            });
    });
}

renderOrderSummery();
renderPaymentSummery();


