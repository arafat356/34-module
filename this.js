// console.log(this)

const Tomandjerry = {
    name: 'Tom and jerry',
    id: 34,
    balance: 5000,
    name: 'Tomandjerry',
    subject: ['bangla', 'ecocomics', 'math 101', 'calcus'],
    treatDeyArrow: () => {
        console.log(this)
    },
    treatDeyInside: function() {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function(expense) {
        this.balance = this.balance - expense;
        console.log('run here', this)
        return this.balance;
    }
}
const Herobalam = {
    id: 102,
    money: 6000,
    name: 'hero balam'
}

function add() {
    console.log(this)
}

// this is the execution Context,
// this is the most changeable function error function can't create her own value,