// Rest Parameters

// ES5

function sumES5 (){
    let arr = Array.prototype.slice.call(arguments);

    let result = 0;

    arr.forEach(function(item){
        result+= item;
    });
    return result;
}
console.log(sumES5(10,20,25));

// ES6

function sumES6 (...arr){
    let result = 0;
    arr.forEach((item) => {result+=item});
    return result;
}


console.log(sumES6(10,20,25));


function isDriver(age,...years){
    years.forEach(year => console.log(2021-year>=age));
}

isDriver(18,1999,2012,1983,2015);


// function getAge(...birthdays){
//     birthdays.forEach(birthday => {
//         console.log(2021-birthday);
//     });
// }

// getAge(1999,2005,1986);

let getAge = (...birthdays) => {
    birthdays.forEach(birthday => 
        {console.log(2021-birthday);
        })

} 
getAge(1999,2005,1986);