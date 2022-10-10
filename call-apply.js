// const sani = {
//     id: 101,
//     name: 'Md Sani',
//     money: 5000,
//     profetion: 'web debeloper',
//     hmsani: function (expeans, bocsis) {
//         this.money = this.money - expeans - bocsis;
//         console.log(this)
//         return this.money;
//     }
// }

// const babu = {
//     id: 202,
//     name: 'djbabu',
//     money: 6000,
// }

// //call
// // sani.hmsani.call(babu, 2000, 1000)

// //apply
// sani.hmsani.apply(babu, [2000, 2000])




const abo = {
    id: 202,
    name: 'abo Thalha',
    money: 5000,
    billal: function (expence) {
        this.money = this.money - expence;
        console.log(this)
        return this.money
    }
}

const raju = {
    id: 404,
    name: 'Raju mama',
    money: 5000
}

abo.billal.call(raju, 50)
abo.billal.apply(raju, [100])