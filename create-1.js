// //1.
// const student = { name: 'sanu', age: 18, locetion: 'pakunda' };
// // console.log(student);

// //2.
// const objects = new Object();
// // console.log(objects)

// //3.
// const objects1 = new Object(student);
// // console.log(objects1);

// //4.
// class man {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }
// const mand = new man(20, 19);
// // console.log(mand)

// //5.
// function add() {
//     console.log('ami vallo asi')
// }
// const add3=new add()

//===================

//1.
const sani = { nmae: 'sani', age: 18, job: 'techer' }

//2.
const a = new Object();
// console.log(a)

//3.

class b {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
}

const c = new b(2, 4);

// console.log(Object.keys(c))
// console.log(Object.values(c))
// console.log(Object.entries(c))

function item() {
    console.log('ami valo asi tomi kmon aso ')
}

const t = new item();
console.log(t)