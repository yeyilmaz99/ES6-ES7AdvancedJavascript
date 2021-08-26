// Arrays in ES6

const boxes = document.querySelectorAll('.box');

//ES5
let boxesES5 = Array.prototype.slice.call(boxes);

// boxes.forEach(function(box){
//     box.style.backgroundColor = 'green'
// })


// //ES6

// Array.from(boxes).forEach((box) => {box.style.backgroundColor = 'pink'});

// ES5

// for(let i=0; i<boxesES5.length; i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor ='blue'
// }

// console.log(boxesES5);

// var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = "I'm Changed";
//     box.style.backgroundColor = 'blue';
// }


// from

// let arr = Array.from('Hello Javascript!');

// console.log(arr);


const products = [
    {name: 'iphoneX', price : 5000},
    {name: 'iphoneX', price : 5000},
    {name: 'iphone7', price : 3000},
    {name: 'iphone8', price : 4000}
]

console.log(Array.from(products,prd => prd.name == 'iphoneX')); // array getirir

console.log(products.find(prd => prd.name == 'iphoneX')); // object getirir

console.log(products.filter(prd => prd.name == 'iphoneX')); // Object dizisi getirmek için

console.log(products.findIndex(prd => prd.price == 6000)); //değer var mı yok mu diye bakmak için


let numbers = ['a','b','c'];

let entries = numbers.entries();

for (let i of entries){
    console.log(i)
}

let keys = numbers.keys();

for( let i of keys){
    console.log(i);
}

let values = numbers.values();

for( let i of values){
    console.log(i);
}