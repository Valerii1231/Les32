//  1
class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
class Ice {
    constructor(price) {
         this.price = price;
    }
}
let cocaCola = new Cola ('Coca-Cola', 10);
let johnWalker = new Whiskey ('John Walker', 100);
let ice = new Ice ( 2);

const mixin = {
     vat(){return (this.price + this.price * 0.2)},
     exciseDuty(){return ((this.price + this.price * 0.3)+ 10)},
     singleTax(){return (this.price + 1)}, 
}

Object.assign(Cola.prototype, mixin);
Object.assign(Whiskey.prototype, mixin);
Object.assign(Ice.prototype, mixin);

console.log (cocaCola.vat());
console.log (johnWalker.exciseDuty());
console.log (ice.singleTax());



//  2
function uniceString(str) {
    let arr = str.split('; ');   
    return new Set(arr);   
}
console.log(uniceString('cherry; orange; cherry; banana; banana'));



//   3
let ul = document.querySelector('.shop-list');
let li = document.querySelectorAll('li');
let model = [];
for (let i = 0; i < li.length; i++) {
    model[i] = li[i].innerHTML;
}
console.log(new Set(model));




//  4
let mike = {name:'Mike', age: 18}
let bob = {name:'Bob', age: 25}
let nikola = {name:'Nikola', age:32}

function siteVisitsCount(){
    let siteVisits =  0;
    return function () {
      return  siteVisits ++;                  
    }  
}

let userVisita = new Map();
let mikeVisita = siteVisitsCount();
mikeVisita(mike);
mikeVisita(mike);
mikeVisita(mike);
userVisita.set(mike, mikeVisita(mike));

let bobVisita = siteVisitsCount();
bobVisita(bob);
userVisita.set(bob, bobVisita(bob));

let nikolaVisita = siteVisitsCount();
nikolaVisita(nikola);
nikolaVisita(nikola);
userVisita.set(nikola, nikolaVisita(nikola));

console.log(userVisita.get(mike));
console.log(userVisita.get(bob));
console.log(userVisita.get(nikola));


