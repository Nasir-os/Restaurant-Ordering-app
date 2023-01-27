import { menuArray } from "./data.js";

document.addEventListener("click", (e) => {
  if (e.target.id) {
    handleAddBtnClicks(e.target.id);
  }
});
let orderedItemHtml;
function handleAddBtnClicks(itemId) {
  const targetOrderItem = menuArray.filter(function (item) {
    return parseInt(itemId) === item.id;
  })[0];
  orderedItemHtml = `
  <div class="ordered-item">
      <h5 class="item-title">${targetOrderItem.name}</h5>
      <button class="remove-btn">remove</button>
      <h5 class="item-price">$${targetOrderItem.price}</h5>
  </div>


  `;
  const checkOutSection = document.getElementById('checkout-section')
  checkOutSection.style.opacity ='1'
  const checkoutOrders = document.querySelector(".checkout-orders");
  checkoutOrders.innerHTML += orderedItemHtml;
}

function getMenuHtml() {
  let menuHtml = "";

  for (let item of menuArray) {
    menuHtml += `
        <div class="item-container">
              <div class="item-graphic">${item.emoji}</div>
              <div class="item-details">
                <h3 class="item-title">${item.name}</h3>
                <p class="item-description">${item.ingredients}</p>
                <h5 class="item-price">$${item.price}</h5>
              </div>
              <button class="add-btn" id="${item.id}">+</button>
            </div> 
        
        `;
  }
  
  return menuHtml;
}

function render() {
  document.querySelector("main").innerHTML = getMenuHtml();
}

render();
