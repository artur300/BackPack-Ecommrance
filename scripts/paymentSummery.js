import {cartArr} from './cart.js';
import {getproducts} from './products.js';
import {getDeliveryOptions} from './deliveryOptions.js';
import {convertMoney} from './utils/money.js';



export function getSum()
{
    let productprice=0;
    let shippingprice=0;
    let Sum=0;
    

    cartArr.forEach((cartItem) => {
        const product = getproducts(cartItem.productid);
        productprice += product.price * cartItem.quantity;
    
        const deliveryoption = getDeliveryOptions(cartItem.deliveryOp);
        if (deliveryoption) 
        {
            shippingprice += deliveryoption.price;
        }
    });

    const tottalBeforeTax=productprice+shippingprice;
    const Tax=tottalBeforeTax*0.1;
    return Sum=tottalBeforeTax+Tax;
}



export function renderPaymentSummery()
{
    
    console.log("renderPaymentSummery working");
    let productprice=0;
    let shippingprice=0;
    

    cartArr.forEach((cartItem) => {
        const product = getproducts(cartItem.productid);
        productprice += product.price * cartItem.quantity;
    
        const deliveryoption = getDeliveryOptions(cartItem.deliveryOp);
        if (deliveryoption) 
        {
            shippingprice += deliveryoption.price;
        }
    });

    const tottalBeforeTax=productprice+shippingprice;
    const Tax=tottalBeforeTax*0.1;
    const Sum=tottalBeforeTax+Tax;

    const paymentsummeryHTML=`<div id="OrderSum"><span id="B16BLUE" >Order Summary</span>
    <div class="payment_list"><p>Items<span id="quantity_sum">(0):</span> 
        $<span id="quantity_price">${ convertMoney(productprice)}</span> 
    </p>
        <div><p>Shipping & handling: $<span id="Shipping_sum">${ convertMoney(shippingprice)}</span></p> 
            <div><p>Total before tax: $<span id="before_tax">${ convertMoney(tottalBeforeTax)}</span></p>
                <div><p>Estimated tax (10%): $<span id="tax10">${convertMoney(Tax)}</span></p>
                    <hr>
                    <div id="B16BLUE"><p>Order total: $<span id="tottal">${convertMoney(Sum)}</span></p>
                            <div id="credit"><button class="bigbutton onclick="payWithCredit()">Pay with Credit </button>
                            
                             </div>
                        </div>
                    </div>
                </div>    
            </div>
    </div>
</div> `;

        document.querySelector('.js-payment-summery').innerHTML = paymentsummeryHTML;
        document.getElementById('credit').addEventListener('click',payWithCredit);
}


function payWithCredit() 
{
    if (cartArr.length === 0) 
    {
        alert("Your cart is empty. Please add items to your cart before proceeding.");
    } 
    else 
    {
        window.location.href = "https://artur300.github.io/BackPack-Ecommrance/slide_menu.html";
        console.log("Proceeding with credit card payment...");
    }
}

