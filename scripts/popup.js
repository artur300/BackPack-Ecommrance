
//popup.js this shows the messeage at start
export function showAlert() 
{
  let messageAlert = `
    <div class="overlay" id="customAlert">
      <div class="modal">
        <span class="close-btn" id="x">×</span>
        <h2>Welcome to my Backpack ecommrance site (arturaniki@gmail.com)</h2>
        <p>This project is a hands-on exploration of web development</p>
        <p> showcasing my skills in HTML, CSS, and JavaScript.</p>
                

        <p style="font-weight: bold;">Functionality</p>
        <p>*Easily add items to the cart, and watch the item count update in real-time.</p>
        <p>*Search bar to find items based on color, size(e.g., large, small), and bag type (e.g., hiking, college, military).</p>
        <p>*Real-time updates on the delivery date. The site seamlessly calculates taxes</p>
        <p>*Add or delete items within the cart.</p>
        <p>*Upon purchase completion, receive a detailed email with all your selected items and info.</p>
        <p>*In the payment section, choose your country to reveal a list of cities.</p>

        <p style="font-weight: bold;">All The photos in this site are from:</p>
        <p style="font-weight: bold;">pngimg.com</p>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', messageAlert);
  document.getElementById('x').addEventListener('click', hideAlert);
  document.getElementById('customAlert').style.display = 'flex';
}

function hideAlert() {document.getElementById('customAlert').style.display = 'none';}


