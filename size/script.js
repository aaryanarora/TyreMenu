Vue.component('cart-item', {
  props: ['product'],
  template: '#cart-item-template'
});

Vue.component('product-item', {
  props: ['product'],
  template: '#product-item-template',  
  methods: {
    addToCart: function (id) {  
      
      // get product
      var product = store.products[id];      
      
      // place product in cart
      store.cart.products.push(product);
      
      // update cart
      store.cart.total += product.price;
      
      // update
      alert('Adding ' + product.title + ' to cart');
    }
  }
});

var store = new Vue({
  el: '#store',
  data: {
    products: [
      { id: 0, title: 'Hat', price: 5.99, category: 'Honda', img: '👒' },
      { id: 1, title: 'Gloves', price: 1.99, category: 'Honda', img: '🧤'},
      { id: 2, title: 'Boots', price: 30.00, category: 'Honda', img: '👢' },
      { id: 3, title: 'Coat', price: 55.99, category: 'Misc', img: '🧥' },
      { id: 4, title: 'Leather Shoes', price: 16.00, category: 'Footwear', img: '👞' },
      { id: 5, title: 'Cap', price: 3.75, category: 'Toyota', img: '🧢' },
      { id: 6, title: 'Scarf', price: 2.50, category: 'Honda', img: '🧣' },
      { id: 7, title: 'Jumper', price: 12.00, category: 'Misc', img: '👚' }
    ],
    filter: false,
    cart: {
      string: 'Cart',
      total: 0.00,
      products: [],
      show: false
    }
  }  
});