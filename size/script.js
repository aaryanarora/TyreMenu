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
      { id: 1, title: 'Audi', category: 'Audi', img: 'A4',size:'225/50R17'},
      { id: 2, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'A-CLASS',size:'205/55R16'},
      { id: 3, title: 'BMW', category: 'BMW', img: 'Model',size:'size to be'},
      { id: 4, title: 'Toyota', category: 'Toyota', img: 'Etios',size:'175/70R14'},
      { id: 5, title: 'Tata', category: 'Tata', img: 'Model',size:'195/60R16'},
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
      { id: 19, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT 3rd GEN (LXi/VXi)',size:'165/80R14'},
      { id: 20, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT ZXi',size:'185/65R15'},
      { id: 21, title: 'Suzuki', category: 'Suzuki', img: 'SWIFT 2nd GEN (ZXi/ZDi)',size:'185/70R14'},
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
      { id: 32, title: 'Suzuki', category: 'Suzuki', img: 'IGNIS',size:'175/65R15'},
      { id: 33, title: 'Toyota', category: 'Toyota', img: 'FORTUNER',size:'265/65R17'},
      { id: 34, title: 'Toyota', category: 'Toyota', img: 'INNOVA CRYSTA',size:'205/65R16'},
      { id: 35, title: 'Toyota', category: 'Toyota', img: 'CAMRY',size:'215/60R16'},
      { id: 36, title: 'Toyota', category: 'Toyota', img: 'GLANZA',size:'195/55R16'},
      { id: 37, title: 'Toyota', category: 'Toyota', img: 'URBAN CRUISER',size:'205/60R16'},
      { id: 38, title: 'Hyundai', category: 'Hyundai', img: 'CRETA',size:'205/65R16'},
      { id: 39, title: 'Hyundai', category: 'Hyundai', img: 'VENUE',size:'195/65R15'},
      { id: 40, title: 'Hyundai', category: 'Hyundai', img: 'I20',size:'195/55R16'},
      { id: 41, title: 'Hyundai', category: 'Hyundai', img: 'VERNA',size:'195/55R16'},
      { id: 42, title: 'Hyundai', category: 'Hyundai', img: 'ALCAZAR',size:'215/60R17'},
      { id: 43, title: 'Hyundai', category: 'Hyundai', img: 'AURA',size:'175/60R15'},
      { id: 44, title: 'Hyundai', category: 'Hyundai', img: 'SANTRO',size:'155/80R13'},
      { id: 45, title: 'Hyundai', category: 'Hyundai', img: 'TUCSON',size:'215/65R16'},
      { id: 46, title: 'Hyundai', category: 'Hyundai', img: 'ELANTRA',size:'205/60R16'},
      { id: 47, title: 'Hyundai', category: 'Hyundai', img: 'GRAND I10 NIOS',size:'175/60R15'},
      { id: 48, title: 'Hyundai', category: 'Hyundai', img: 'I20 N-LINE',size:'195/55R16'},
      { id: 49, title: 'Tata', category: 'Tata', img: 'PUNCH',size:'195/60R16'},
      { id: 50, title: 'Tata', category: 'Tata', img: 'HARRIER',size:'235/60R17'},
      { id: 51, title: 'Tata', category: 'Tata', img: 'ALTROZ',size:'195/55R16'},
      { id: 52, title: 'Tata', category: 'Tata', img: 'TIAGO',size:'175/60R15'},
      { id: 53, title: 'Tata', category: 'Tata', img: 'SAFARI',size:'235/70R16'},
      { id: 54, title: 'Tata', category: 'Tata', img: 'TIGOR',size:'175/60R15'},
      { id: 55, title: 'Tata', category: 'Tata', img: 'TIGOR EV',size:'175/65R14'},
      { id: 56, title: 'Tata', category: 'Tata', img: 'TIGOR',size:'175/60R15'},
      { id: 57, title: 'Tata', category: 'Tata', img: 'NEXON',size:'195/60R16'},
      { id: 58, title: 'Tata', category: 'Tata', img: 'NEXON EV',size:'215/60R16'},
      { id: 59, title: 'Audi', category: 'Audi', img: 'Q2',size:'235/55R19'},
      { id: 60, title: 'Audi', category: 'Audi', img: 'Q5',size:'235/65R17'},
      { id: 61, title: 'Audi', category: 'Audi', img: 'A6',size:'245/45R18'},
      { id: 62, title: 'Audi', category: 'Audi', img: 'A8',size:'235/55R18'},
      { id: 63, title: 'Audi', category: 'Audi', img: 'Q8',size:'275/50R20'},
      { id: 64, title: 'Audi', category: 'Audi', img: 'E-TRON GT',size:'245/45R20, 225/55R19'},
      { id: 65, title: 'Audi', category: 'Audi', img: 'RS7',size:'275/35R20'},
      { id: 66, title: 'Audi', category: 'Audi', img: 'S5',size:'245/40R18'},
      { id: 67, title: 'Audi', category: 'Audi', img: 'Q5',size:'235/65R17'},
      { id: 68, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'GLA',size:'215/60R17'},
      { id: 69, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'G-CLASS',size:'295/40R21'},
      { id: 70, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'C-CLASS',size:'205/55R16'},
      { id: 71, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'E-CLASS',size:'265/35R20'},
      { id: 72, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'GLS',size:'175/65R15'},
      { id: 73, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'S-CLASS',size:'175/65R15'},
      { id: 74, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'GLC',size:'175/65R15'},
      { id: 75, title: 'Mercedes-Benz', category: 'Mercedes-Benz', img: 'GLE',size:'315/40R21'}
      
      
      
      
      
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
