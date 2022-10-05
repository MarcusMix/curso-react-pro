"use strict";
// 1. Crie uma ProductInterface, que possua as seguintes propriedades:
// - id (number e readonly)
// - name (string)
// - price (number)
// - getFormattedPrice, método que retorne uma string contendo o price formatado (R$100, por exemplo))
;
// 2. Crie uma classe chamada Product, que implemente a ProductInterface criada no exercício anterior
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getFormattedPrice() {
        return `R$${this.price}`;
    }
}
const product = new Product(1, 'Poco X3 PRO', 1599);
const product2 = new Product(2, 'Acer Aspire ES 15', 1900);
const product3 = new Product(3, 'Air Dots Pro', 250);
console.log(product.getFormattedPrice());
console.log(product2.getFormattedPrice());
console.log(product3.getFormattedPrice());
console.log(product);
console.log(product2);
console.log(product3);
// 3. Crie uma classe chamada Tshirt, que estenda a Product e que possua as seguintes propriedades:
// - size (number private)
// - color (string private)
class Tshirt extends Product {
    constructor(id, name, price, size, color) {
        super(id, name, price);
        this.size = size;
        this.color = color;
    }
}
const camisa = new Tshirt(1, 'Camisa do Naruto', 99, 24, 'Laranja');
const camisa2 = new Tshirt(2, 'Révi metau', 150, 24, 'Preta super dark');
const camisa3 = new Tshirt(3, 'Camisa do Sharingan', 69, 24, 'Vermelha cor de sangue');
console.log(camisa.getFormattedPrice());
console.log(camisa2.getFormattedPrice());
console.log(camisa3.getFormattedPrice());
console.log(camisa);
console.log(camisa2);
console.log(camisa3);
