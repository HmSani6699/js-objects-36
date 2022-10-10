const myInfo = {
    name: 'sani',
    age: 18,
    locatino: 'pakunda',
    id: 101,

};

const a = Object.keys(myInfo);
// console.log(a)
const b = Object.values(myInfo);
// console.log(b)
const c = Object.entries(myInfo);

Object.freeze(myInfo);
Object.seal(myInfo);
delete myInfo.id;
delete myInfo.name;
myInfo.age = 3000;
console.log(myInfo);