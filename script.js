//SELECT ELEMENTS
const mainEl = document.querySelector("main");
const cartItemsEl = document.querySelector(".checkout-orders");
const checkOutSectionEl = document.querySelector("#checkout-section");
const purchaseBtnEl = document.querySelector(".purchase-btn");
const modal = document.querySelector(".modal");
const payBtn = document.querySelector(".pay-btn");
// ADD EVENT LISTENERS

document.addEventListener("click", (e) => {
  if (e.target === purchaseBtnEl) {
    modal.style.display = "block";
  } else if (e.target == modal) {
    modal.style.display = "none";
  } else if (e.target === payBtn) {
    modal.querySelector(".modal-content").addEventListener("submit", (e) => {
      e.preventDefault();
      modal.style.display = "none";
      const userName = modal.querySelector(".name").value;
      checkOutSectionEl.innerHTML = `
     <h4 class="successful-pay-msg">Thanks,${userName}! Your order is on its way!</h4>
    
    `;
    });
  }
});

//RENDER PRODUCTS

function renderMenu() {
  menuArray.forEach((item) => {
    mainEl.innerHTML += `

  <div class="item-container">
  <div class="item-graphic">${item.emoji}</div>
  <div class="item-details">
    <h3 class="item-title">${item.name}</h3>
    <p class="item-description">${item.ingredients}</p>
    <h5 class="item-price">$${item.price}</h5>
  </div>
  <button class="add-btn" id="${item.id}" onclick="addToCart(${item.id})">+</button>
</div> 
  
  `;
  });
}

renderMenu();

// CART ARRAY

cart = [];

//ADD TO CART

function addToCart(id) {
  let item = menuArray.find((item) => item.id === id);
  if (cart.some((item) => item.id === id)) {
    let existingItem = cart.find((item) => item.id === id);
    existingItem.numberOfUnits += 1;
  } else {
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

//REMOVE ITEM FROM CART

function removeFromCart(id) {
  

  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

//update cart

function updateCart() {
  renderCartItems();
  renderSubtotal();
}

//render cart items
function renderCartItems() {
  if (cart.length === 0) {
    checkOutSectionEl.style.opacity = "0";
    const totalEl = document.querySelector(".total-price");
    totalEl.textContent = `$0`;
  }else{
    checkOutSectionEl.style.opacity = "1";

  }
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `        
  <div class="ordered-item" data-id="${item.id}">
      <h5 class="item-title">${item.name}</h5>
      <button class="remove-btn" onclick="removeFromCart(${
        item.id
      })">remove</button>
      <h5 class="item-price">$${item.price * item.numberOfUnits}</h5>
  </div>            
  `;
  });
}

function renderSubtotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.numberOfUnits;
    const totalEl = document.querySelector(".total-price");

    totalEl.textContent = `$${total}`;
  });
  return total;
}
