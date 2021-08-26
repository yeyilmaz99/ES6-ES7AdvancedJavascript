// Destructuring

// Destructuring assignment

var a,b,rest;

[a,b] = [10,20];

console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50,60];
// dizi olarak verir

console.log('***********');

console.log(a);
console.log(b);
console.log(rest);


console.log('***********');
({a,b} = {a: 10,b: 20});

console.log(a);
console.log(b);

console.log('***********');

({a,b,...rest} = {a: 10, b: 20, c: 30, d:40, f:50});
// object olarak verir


console.log(a);
console.log(b);
console.log(rest);

// array destructuring

const arrConfig = ['localhost', '8080', '900'];

// ES5

// var server = arrConfig[0];
// var port  = arrConfig[1];
// var timeout = arrConfig[2];
// console.log(server,port,timeout);

// ES6

// const[server,port,timeout] = arrConfig;

// console.log(server,port,timeout);

// Object Destructuring

const objConfig = {
    server : 'localhost',
    port : '8080',
    timeout: '800'
}

// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;

// const {server,port,timeout} = objConfig

// console.log(server,port,timeout);

// let {timeout : t} = objConfig;
// console.log(t);

// let {server,port,timeout = 900} =objConfig

// console.log(server,port,timeout);


const days = ['Monday', 'Tuesday','Wednesday','Thursday','Friday'];

const [,,wed,,fri] = days;

console.log(wed,fri);