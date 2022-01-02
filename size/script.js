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
      // alert(product.title + ' ' + product.img + ' has size of ' + product.size);
    }
  }
});

var store = new Vue({
  el: '#store',
  data: {
    products: [
      { id: 0, title: 'Honda', category: 'Honda', img: 'Amaze', size: '175/65R15' },
      { id: 1, title: 'Audi', category: 'Audi', img: 'A4',size:'225/50R17 7Jx17 ET42'},
      { id: 2, title: 'Mercedes', category: 'Mercedes', img: 'E200D',size:'205/65R16 7Jx16 ET32'},
      { id: 3, title: 'BMW', category: 'BMW', img: 'Model',size:'size to be'},
      { id: 4, title: 'Toyota', category: 'Toyota', img: 'Model',size:'size to be'},
      { id: 5, title: 'Hyundai', category: 'Hyundai', img: 'Model',size:'size to be'},
      { id: 6, title: 'Suzuki', category: 'Suzuki', img: 'Model',size:'size to be'},
      { id: 7, title: 'Volkswagen', category: 'Volkswagen', img: 'Model',size:'size to be'},
      { id: 8, title: 'Mahindra', category: 'Mahindra', img: 'Model',size:'size to be'},
      { id: 9, title: 'Honda', category: 'Honda', img: 'CRV',size:'Crv ka Size'}
      
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
