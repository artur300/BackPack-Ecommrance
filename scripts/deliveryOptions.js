
export const deliveryOp=[
    {id:'1',days:7,price:2000},
    {id:'2',days:3,price:5000},
    {id:'3',days:1,price:9000}

];

export function getDeliveryOptions(deliveryOptionid)
{
    let deliveryOption;

    deliveryOp.forEach((option)=>
    {
        if(option.id===deliveryOptionid)
        {
            deliveryOption=option;
        }
    });

    return  deliveryOption;
}