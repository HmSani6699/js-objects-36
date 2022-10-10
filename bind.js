// /* /* const sani = {
//     id: 101,
//     name: 'Md Sani',
//     money: 5000,
//     profetion: 'web debeloper',
//     hmsani: function (expeans) {
//         this.money = this.money - expeans;
//         console.log(this)
//         return this.money;
//     }
// }

// const babu = {
//     id: 202,
//     name: 'djbabu',
//     money: 6000,
// }

// const babuResult = sani.hmsani.bind(babu);
// babuResult(500) */


// const sani = {
//     id: 101,
//     name: 'Md Sani',
//     money: 5000,
//     profetion: 'web debeloper',
//     hmsani: function (expeans) {
//         this.money = this.money - expeans;
//         console.log(this)
//         return this.money;
//     }
// }


// const pappu = {
//     id: 00,
//     name: 'rjpappu',
//     money: 10000,
// }

// const rjPuppo = sani.hmsani.bind(pappu);
// rjPuppo(6000)
// rjPuppo(3000) 



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
const tohin = {
    id: 404,
    name: 'Tohin mama',
    money: 5000
}

const rajuDb = abo.billal.bind(raju);
rajuDb(500);
const tohinMam = abo.billal.bind(tohin);
tohinMam(100);
