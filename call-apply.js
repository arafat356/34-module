const Tomandjerry = {
    name: 'Tom and jerry',
    id: 34,
    balance: 5000,
    name: 'Tomandjerry',
    subject: ['bangla', 'ecocomics', 'math 101', 'calcus'],
    treatDey: function(expense) {
        this.balance = this.balance - expense;
        console.log('run here', this)
        return this.balance;
    }
}

const Herobalam = {
    id: 102,
    balance: 5000,
    name: 'Hero Balam'
}
const NormalGolam = {
    id: 102,
    balance: 5000,
    name: 'Normal Golam'
}

Tomandjerry.treatDey.call(Herobalam, 500);


// 35.7 er 3 mt 26s s