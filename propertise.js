const myInfo = {
    name: 'sani',
    age: 18,
    locatino: 'pakunda',
    id: 101,

};

//1.keas
const result = Object.keys(myInfo)
// console.log(result)

//2.values
const result1 = Object.values(myInfo);
// console.log(result1)

//3.entries
const result2 = Object.entries(myInfo);
// console.log(result2)

//freeze
Object.freeze(myInfo)
//seal 
Object.seal(myInfo)
myInfo.name = 2222;

//delete
delete myInfo.id;
delete myInfo.name;
console.log(myInfo)