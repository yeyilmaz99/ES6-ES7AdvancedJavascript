// Arrow functions

//ES5

let welcomeES5 = function(){
    console.log("hello from ES5");
}

welcomeES5();

//ES6

let welcomeES6 = () =>{
    console.log("hello from ES6");
}

welcomeES6();


// with parameters


//ES5
let multiplyES5 = function (x,y){
    return x*y;
}

console.log(multiplyES5(5,5));

//ES6

// let multiplyES6 = (x,y) => {
//     return x*y;
// }

let multiplyES6 = (x,y) => x*y;

console.log(multiplyES6(15,2));


// ES5

let splitES5 = function(text){
    return text.split(' ');
}

console.log(splitES5('modern javascript kursu'));

// ES6

let splitES6 = (text) => {
    return text.split(' ');
}

console.log(splitES6('modern javascript kursu'));


// Object Literals

// ES5

let getProductES5 = function (id,name){
    return {
        id : id,
        name : name
    }
}

console.log(getProductES5("1","mi note10pro"));

// ES6

let getProductES6 = (id,name) => (
    {
        id : id,
        name : name
    }
);

console.log(getProductES6("2","mi note 10 lite"));



const phones = [
    {name : 'iphone 8', price: 4000},
    {name : 'iphone 7', price: 3000},
    {name : 'iphone 6', price: 2000},
    {name : 'iphone 5', price: 1000}
];


// ES5
let pricesES5 = phones.map(function(phone){
    return phone.name;
});

console.log(pricesES5);

// ES6
let pricesES6 = phones.map(phone => phone.price);

console.log(pricesES5);



const arr = [1,2,3,4,5,6,7,8,9,10];
// ES5

let evenES5 = arr.filter(function(a){
    return a%2==0;
});

console.log(evenES5);

// ES6

let evenES6 = arr.filter(a => a%2==1);

console.log(evenES6);


