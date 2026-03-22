//**********objects : Property-value pair **************

const product = {
    name: 'A',
    price: 100,
    ['time']: 24
};

console.log(product);
console.log(product.name);

product.name = 'B';
console.log(product.name);

//adding new property
product.newProperty = true;
console.log(product);

//deleting
delete product.newProperty;
console.log(product);

//accessing 
console.log(product.name); //method 1
console.log(product['name']); //method 2 (lets us use properties that dont work with dot notation)
console.log(product['time']);

//Nested Objects

const x = {
    name: 'shirt',
    delivery_time: '2 days',
    rating: {
        stars: 4,
        count: 82
    },
    fun: function f1() {
        console.log("Function inside object");
    }
};

console.log(x.rating.count);

//function inside objects

const y = {
    fun: function f1() {
        console.log("Function inside object");
    }
};

y.fun();


//**********  JSON  **************

//json doesnt allow function in it

//converting js object to json
console.log(JSON.stringify(x));
const jsonString = JSON.stringify(x);

//converting json to js object
JSON.parse(jsonString);

//**********  localStorage  **************
//it supports only strings

//adding elements to it

localStorage.setItem();
//we can pass two parameters in it , 1.name , 2.value