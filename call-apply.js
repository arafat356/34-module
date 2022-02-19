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

// Tomandjerry.treatDey.call(Herobalam, 500);


Tomandjerry.treatDey.apply(Herobalam, [400, 100, 50])
Tomandjerry.treatDey.apply(Herobalam, [1000, 700, 50])
Tomandjerry.treatDey.apply(NormalGolam, [800, 100, 300])