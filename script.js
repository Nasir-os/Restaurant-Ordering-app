import {menuArray} from "./data.js";

const main =  document.querySelector('main')
let menuHtml = ''

function renderMenuArray(){
    for(let item of menuArray){
       menuHtml +=   
      `
      <div class="item-container" id="${item.id}">
            <div class="item-graphic">${item.emoji}</div>
            <div class="item-details">
              <h3 class="item-title">${item.name}</h3>
              <p class="item-description">${item.ingredients}</p>
              <h5 class="item-price">$${item.price}</h5>
            </div>
            <button class="add-btn">+</button>
          </div>
      
      ` 
    }
    main.innerHTML = menuHtml

   
}

console.log(document.querySelectorAll('.add-btn'));







renderMenuArray()