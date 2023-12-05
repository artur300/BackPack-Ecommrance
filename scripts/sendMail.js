
//WATCH THIS https://www.youtube.com/watch?v=dgcYOm8n8ME
import {cartArr,removeFromCart} from '../scripts/cart.js';
import {getproducts} from '../scripts/products.js';
import {getSum} from '../scripts/paymentSummery.js';




function sendMail() {
    
    //If one of the fields is empty it alerts you
    const requiredFields = ['card', 'ex', 'csc', 'name', 'lastname', 'address', 'info', 'postal', 'Mobile', 'Email'];
    for (const field of requiredFields) {
        const value = document.getElementById(field).value;
        if (!value || value.trim() === '') {
            alert(`Please fill in the ${field} field.`);
            return; 
        }
    }
    //////////////////////////////////////////////////////





    //Check cart and gives you the names+price+tottal price inside a message to mail
    let messageContent = "Items:\n";
    cartArr.forEach((cartItem) => {
        const product = getproducts(cartItem.productid);
        messageContent += `- ${product.name}: $${(product.price * cartItem.quantity) / 100}\n`;
    });

    let sum = getSum();
    messageContent += "The Total (with taxes and shipping) is: " + (sum / 100) + "$";
    ///////////////////////////////////////////////////////////



    

    //Sends the Mail
    var params = 
    {
        message: messageContent,
        cardnumber: document.getElementById('card').value,
        Expires: document.getElementById('ex').value,
        CSC: document.getElementById('csc').value,
        Country: document.getElementById('Country').textContent,
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        address: document.getElementById('address').value,
        info: document.getElementById('info').value,
        region: document.getElementById('region').textContent,
        postal: document.getElementById('postal').value,
        Mobile: document.getElementById('Mobile').value,
        Email: document.getElementById('Email').value,
    };

    const serviceID = "service_4qo3po4";
    const templateID = "template_y8yedzq";

    emailjs.send(serviceID, templateID, params)
        .then((res) => 
        {
            
            requiredFields.forEach((field) => 
            {
                document.getElementById(field).value = '';
            });

            cartArr.forEach((item) => 
            {
                removeFromCart(item.productid);
            });

            console.log(res);
            alert("Your message was sent");
        })
        .catch((err) => 
        {
            console.log(err);
            alert("Error sending email. Check the console for details.");
        });
}

document.getElementById('Pay').addEventListener('click', sendMail);

/////////////////////////////////////////////////////////////////