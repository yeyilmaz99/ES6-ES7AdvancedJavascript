// sets (collection- Unique Value) (var olan elemanı tekrar eklemez)

let val;
var mySet = new Set();


mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(4);
mySet.add('iki')
mySet.add({a:1,b:2});

var obj = {a:1,b:2};

mySet.add(obj);

val = mySet.has(1);
val = mySet.has(3);
val = mySet.has(obj);

val = mySet.size;

val = mySet.delete(1);


console.log(val);
console.log(mySet);
console.log('*************');

for(let item of mySet){
    console.log(item);
}
console.log('*************');

for(let item of mySet.keys()){
    console.log(item)
}

console.log('*************');

for(let item of mySet.values()){
    console.log(item)
}

console.log('*************');

for(let [key,value] of mySet.entries()){
    console.log(key + ' : ' + value)
}

console.log(Array.from(mySet));

let mySet2 = new Set([1,2,3,4]);

console.log('***********');

console.log(mySet2)

//intersect

// var intersect = new Set(Array.from(mySet).filter(x => mySet2.has(x)));

var intersect = new Set([...mySet].filter(x => mySet2.has(x)));


console.log(intersect);


//difference


var difference = new Set([...mySet].filter(x => !mySet2.has(x)));


console.log(difference);