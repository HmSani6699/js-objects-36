const myInfo = {
    name: 'sani',
    age: 18,
    locatino: 'pakunda',
    job: 'techer',
    id: 101,
};

//for in loop
for (const res in myInfo) {
    // console.log(res)
}

//keys
const result = Object.keys(myInfo);
for (const res of result) {
    // console.log(res, myInfo[res])
}

//entries
for (const [keys, values] of Object.entries(myInfo)) {
    console.log(keys, values)
}
