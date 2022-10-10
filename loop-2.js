const student = {
    id: 101,
    name: 'sani',
    age: 18,
    money: 5000
}

for (const res in student) {
    // console.log(res)
}

//keys
const keysing = Object.keys(student)
for (const res1 of keysing) {
    // console.log(res1, keysing[res1])
}

for (const [num1, num2] of Object.entries(student)) {
    console.log(num1, num2)
}