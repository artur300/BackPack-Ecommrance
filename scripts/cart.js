
export let cartArr = JSON.parse(localStorage.getItem('cart'));

if (!cartArr) 
{
    cartArr = [{ productid: '1ffa4da2-86c5-11ee-b9d1-0242ac120002', quantity: 1,deliveryOp:'1' }];
}

function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cartArr));
}
    

export function addToCart(productid) 
{
    let matchingitem;
    cartArr.forEach((item) => 
    {
        if (productid === item.productid) 
        {
            matchingitem = item;
        }
    });

    if (matchingitem) 
    {
        matchingitem.quantity += 1;
    } 
    else 
    {
        cartArr.push({ productid: productid, quantity: 1,deliveryOp:'1' });
    }

    saveToStorage();
}


export function removeFromCart(productID) 
{
    let upDateAryy = [];
    cartArr.forEach((item) => 
    {
        if (item.productid !== productID) 
        {
            upDateAryy.push(item);
        }
    });
    cartArr = upDateAryy;
    saveToStorage();
}



export function Update_Delivery_Option(productid,deliveryOp)
{
    let matchingItem;
    cartArr.forEach((cartItem)=>
    {
        if(productid===cartItem.productid)
        {
            matchingItem=cartItem;
        }
    });
    matchingItem.deliveryOp=deliveryOp;
    saveToStorage();
}