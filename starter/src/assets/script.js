// Create new array to store products available for sale

const products = [

  {
    name: 'Apples',
    price: 1,
    quantity: 0,
    productId: 1,
    image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },

  {
    name: 'Peaches',
    price: 2,
    quantity: 0,
    productId: 2,
    image: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },

  {
    name: 'Pears',
    price: 3,
    quantity: 0,
    productId: 3,
    image: 'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },

  {
    name: 'Kiwi',
    price: 4,
    quantity: 0,
    productId: 4,
    image: 'https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
  ];

// Create new array to store products we wish to purchase

let cart = [];

//Create function so products can be added to the cart

function addProductToCart(productId) {
  let product = products.find(product => product.productId === productId);
  product.quantity += 1;

  if (!cart.some(item => item.productId === productId)) {
    cart.push(product);
  }
}

//Create function so product amount can be incremented
function increaseQuantity(productId) {
  const product = products.find((product) => product.productId === productId);
  ++product.quantity;
}
//Create function so product amount can be decremented

function decreaseQuantity(productId) {
  const product = products.find(product => product.productId === productId);
  --product.quantity;

  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}
//Create function so product amount can be removed entirely from cart

function removeProductFromCart(productId) {
  const index = cart.findIndex(item => item.productId === productId);
  
  if (index !== -1) {
    cart[index].quantity = 0;
      cart.splice(index, 1);
  }
}

//Create function so cart total can be calculated

function cartTotal() {
let totalPrice = 0;
for (let x = 0; x < cart.length; x++) {
  totalPrice += cart[x].quantity * cart[x].price;
  }
return totalPrice;
}

//Create function so cart can be emptied

function emptyCart() {
  cart = [];
}

//Global variable to store amount paid by customer

let totalPaid = 0;

//Create function to determine if customer paid enough and provide change or require add. funds

function pay(amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();
  if (remaining >= 0) {
    totalPaid = 0;
    emptyCart()
  }
  return remaining;
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   //Uncomment the following line if completing the currency converter bonus
   //currency
}
