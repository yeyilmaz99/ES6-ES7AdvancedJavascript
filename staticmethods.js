//static Methods


// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }

//     calculateAge(){
//         return 2021- this.yearOfBirth;
//     }

//     static sayHi(){
//         console.log('hello there');
//     }

// }


// let yagmur = new PersonES6('yagmur', 'student', 2000);

// console.log(yagmur.calculateAge());
// console.log(yagmur);
// PersonES6.sayHi();


class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }

}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));