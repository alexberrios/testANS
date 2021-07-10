// const productsAtDayZero = [
//   new Product('Medium Coverage', 10, 20),
//   new Product('Full Coverage', 2, 0),
//   new Product('Low Coverage', 5, 7),
//   new Product('Mega Coverage', 0, 80),
//   new Product('Mega Coverage', -1, 80),
//   new Product('Special Full Coverage', 15, 20),
//   new Product('Special Full Coverage', 10, 49),
//   new Product('Special Full Coverage', 5, 49),
//   new Product('Super Sale', 3, 6),
// ];

// const carInsurance = new CarInsurance(productsAtDayZero);
// const productPrinter = function (product) {
//   console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
// };

// for (let i = 1; i <= 30; i += 1) {
//   console.log(`Day ${i}`);
//   console.log('name, sellIn, price');
//   carInsurance.updatePrice().forEach(productPrinter);
//   console.log('');
// }

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

const defaultProduct = (name, price, sellIn) => {
  price = price - 1;
  sellIn = sellIn - 1;
   return {
    name,
    price, 
    sellIn
  } 

}
const specialProducts = {
  'Full Coverage' : (price, sellIn) => {
    price = price + 2;
    sellIn = sellIn - 1;

    

    return {
      name: 'Full Coverage', 
      price, 
      sellIn
    }
  },
  'Special Full Coverage' : (price, sellIn)  => {
    price = price + 1;
    sellIn = sellIn - 1;
    if (sellIn < 11) {
      if (price < 50) {
        price = price + 1;
      }
    }
    if (sellIn < 6) {
      if (price < 50) {
        price = price + 1;
      }
    }
    if(sellIn < 0){
      price = price - price;
    }
    return {
      name: 'Special Full Coverage', 
      price, 
      sellIn
    } 

  },
  'Mega Coverage' : (price, sellIn)  => {
    return {
      name: 'Mega Coverage', 
      price, 
      sellIn
    }
  },
}


class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      let sellIn, price, name;

      sellIn = this.products[i].sellIn;
      price = this.products[i].price;
      name = this.products[i].name;
      
      if(price> 0 && price < 50 ){

        const run = specialProducts[name] ? specialProducts[name](price, sellIn) : defaultProduct(name, price, sellIn);
        
        this.products[i].name = run.name
        this.products[i].price = run.price
        this.products[i].sellIn = run.sellIn
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
