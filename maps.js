// maps : key/value pairs (collection)

let val;

const numbers = new Map();

numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val = numbers;
val = numbers.get(1);
val= numbers.get('2');
val = numbers.get('four');
val = numbers.size;
val = numbers.has(1);
// val = numbers.has('four');
val = numbers.delete('four');
val = numbers.has('four');


console.log(val);

for (var [key,value] of numbers){
    console.log(key +' = ' + value);
}

for (var [key,value] of numbers.entries()){
    console.log(key +' = ' + value);
}

for (var key of numbers.keys()){
    console.log(key);
}

for (var value of numbers.values()){
    console.log(value);
}

numbers.forEach(function(key,value){
    console.log(key + ' - ' + value)
})

console.log('***********')

var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

var second = new Map([
    [4,'four'],
    [5,'five'],
    [6,'six']
])

var merged = new Map([...first,...second]);

console.log(merged);