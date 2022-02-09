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
Tomandjerry.treatDey(100);
const heroTreatDey = Tomandjerry.treatDey.bind(Herobalam);
const NormalTreatDey = Tomandjerry.treatDey.bind(NormalGolam);
heroTreatDey(500);
heroTreatDey(2000);
Tomandjerry.treatDey(3000);
NormalTreatDey(300);