// /* const frist = { a: 1, b: 2 };
// const second = { b: 2, a: 1 };
// const three = frist

// if (frist === three) {
//     // console.log('he is true item')
// }
// else {
//     // console.log('he is false item')
// }



// const frist1 = JSON.stringify(frist);
// const second1 = JSON.stringify(second);
// console.log(frist1);
// console.log(second1);
// if (frist1 === second1) {
//     // console.log(true)
// }
// else {
//     // console.log(false)
// }

// function compearObject(obj1, obj2) {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false
//     }
//     for (const prob in obj1) {
//         if (obj1[prob] !== obj2[prob]) {
//             return false
//         }
//     }
//     return true;
// }
// const result = compearObject(frist, second);
// console.log(result);
//  */



// const myInfo = { a: 2, b: 3 };
// const yourInfo = { a: 2, b: 3 };
// if (JSON.stringify(myInfo) === JSON.stringify(yourInfo)) {
//     // console.log('yes is true')
// }
// else {
//     // console.log('not is true')
// }

// function myObject(obj1, obj2) {
//     if (Object.keys(obj1) !== Object.keys(obj2)) {
//         return false
//     }
// }
// const result = myObject(myInfo, yourInfo);
// // console.log(result)


const frist = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
const three = frist;

// console.log(Object.keys(frist).length)
if (Object.keys(frist).length === Object.keys(second).length) {
    console.log('ami true')
}

JSON.stringify(frist)
JSON.stringify(second)
// console.log(JSON.stringify(frist), JSON.stringify(second))
if (JSON.stringify(frist) === JSON.stringify(second)) {
    // console.log('he is true')
}
else {
    // console.log('he is false')
}