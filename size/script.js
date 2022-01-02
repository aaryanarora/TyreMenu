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
      { id: 9, title: 'Honda', category: 'Honda', img: 'CR-V',size:'225/65R17'},
      { id: 10, title: 'Honda', category: 'Honda', img: 'JAZZ',size:'175/65R15'},
      { id: 11, title: 'Honda', category: 'Honda', img: 'WR-V',size:'195/60R16'},
      { id: 12, title: 'Honda', category: 'Honda', img: 'CITY 4th GEN',size:'185/55R16'},
      { id: 13, title: 'Honda', category: 'Honda', img: 'CITY',size:'175/65R15'},
      { id: 14, title: 'Honda', category: 'Honda', img: 'BR-V',size:'195/60R16'},
      { id: 15, title: 'Honda', category: 'Honda', img: 'CIVIC',size:'195/65R15'},
      { id: 16, title: 'Honda', category: 'Honda', img: 'ACCORD HYBRID',size:'235/45R18'},
      { id: 17, title: 'Honda', category: 'Honda', img: 'BRIO',size:'175/65R15'},
      { id: 18, title: 'Suzuki', category: 'Suzuki', img: 'BREZZA',size:'205/60R16'},
      { id: 19, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT 3rd GEN(LXi/VXi)',size:'165/80R14'},
      { id: 20, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT ZXi',size:'185/65R15'},
      { id: 21, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT 2nd GEN(ZXi/ZDi)',size:'185/70R14'},
      { id: 22, title: 'Suzuki', category: 'Suzuki', img: 'ERTIGA',size:'185/65R15'},
      { id: 23, title: 'Suzuki', category: 'Suzuki', img: 'BALENO',size:'195/55R16'},
      { id: 24, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT DZIRE (ZXi)',size:'185/65R15'},
      { id: 25, title: 'Suzuki', category: 'Suzuki', img: 'WAGON-R (LXi)',size:'155/80R13'},
      { id: 26, title: 'Suzuki', category: 'Suzuki', img: 'WAGON-R (VXi/ZXi)',size:'165/70R14'},
      { id: 27, title: 'Suzuki', category: 'Suzuki', img: 'CELERIO',size:'165/70R14'},
      { id: 28, title: 'Suzuki', category: 'Suzuki', img: 'S-CROSS',size:'205/60R16'},
      { id: 29, title: 'Suzuki', category: 'Suzuki', img: 'XL6',size:'185/65R15'},
      { id: 30, title: 'Suzuki', category: 'Suzuki', img: 'S-PRESSO',size:'165/70R14'},
      { id: 31, title: 'Suzuki', category: 'Suzuki', img: 'CIAZ',size:'195/55R16'},
      { id: 32, title: 'Suzuki', category: 'Suzuki', img: 'IGNIS',size:'175/65R15'}
      
      
      
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
