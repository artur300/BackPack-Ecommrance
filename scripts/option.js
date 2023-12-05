
import { cartArr, addToCart } from '../scripts/cart.js';
import { Products_arr } from '../scripts/products.js';
import { convertMoney } from './utils/money.js';
import { showAlert} from '../scripts/popup.js';

showAlert();

let save_number = JSON.parse(localStorage.getItem('save_number'));
let sum1=0;
cartArr.forEach((compare)=>
{
  sum1+=compare.quantity;
});
save_number=sum1;


if (!save_number) { save_number=0;}
document.querySelector('.js-count').innerHTML=save_number;
export function saveTo(){localStorage.setItem('save_number',JSON.stringify(save_number ));}



//Search engine 
let searchResults = [];
let productsAR = Products_arr;

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const SearchWord = searchInput.value.toLowerCase();

  searchResults = Products_arr.filter((item) =>
  item.keywords.some((keyword) => keyword.includes(SearchWord))
);

  productsAR = searchResults;

  renderProducts(productsAR);
});
//////////////////////



function renderProducts(products) 
{
  let combine = '';
    products.forEach((pro) => {
      combine += `
      <div class="box">
          <div class="innerbox">
              <img src="${pro.img}" alt="${pro.name}">
              <div id="name">${pro.name}</div>
              <div class="stars js-stars">
              ${StarRating(pro.rating)}
              </div>
              <div id="price">$${convertMoney(pro.price)}</div>
              <button class="add js-add-to-cart" data-id="${pro.id}">Add</button>
          </div>
      </div>`;
    });

    document.querySelector('.js-container').innerHTML = combine;
    addEventListeners();
}

renderProducts(productsAR);


function addEventListeners() 
{

  document.querySelectorAll('.js-add-to-cart').forEach((buttonx) => {
    buttonx.addEventListener('click', () => 
    {
        const productid = buttonx.dataset.id;
        addToCart(productid);
        let sum=0;
        cartArr.forEach((q)=>
        {
            sum+=q.quantity
                   
        });

        save_number=sum
        document.querySelector('.js-count').innerHTML=save_number;
        saveTo();   
    });
    
 });

}

function StarRating(rating) {
  let starRatingHTML = ''; 

  switch (rating) {
    case 0:
      starRatingHTML += `
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
      `;
      break;

      case 1:
        starRatingHTML += `
          <span class="fa fa-star fa-1x checked" style="color: gold;""></span>
          <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
          <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
          <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
          <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        `;
        break;

        case 2:
      starRatingHTML += `
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
      `;
      break;

      case 3:
      starRatingHTML += `
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
      `;
      break;

      case 4:
      starRatingHTML += `
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x " style="color: rgb(0, 0, 0);"></span>
      `;
      break;

    case 5:
      starRatingHTML += `
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
        <span class="fa fa-star fa-1x checked" style="color: gold;"></span>
      `;
      break;
  }

  return starRatingHTML; 
}


