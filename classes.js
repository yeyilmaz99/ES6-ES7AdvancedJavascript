// Classes

// ES5

var PersonES5 = function(name,job,yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

PersonES5.prototype.calculateAge = function (){
    return 2021-this.yearOfBirth;
}

var yunus = new PersonES5('yunus','student',1999);

console.log(yunus)
console.log(yunus.calculateAge());


// ES6

class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        return 2021- this.yearOfBirth;
    }


}


let yagmur = new PersonES6('yagmur', 'student', 2000);

console.log(yagmur.calculateAge());
console.log(yagmur);