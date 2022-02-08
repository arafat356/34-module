//1 using object literal 
const student = { name: 'sakib al hasan', job: 'cricketer' };
//2 construtor
const person = new Object();
// console.log(person)
//3 another one 
// const human = Object.create(null)
const human = Object.create(student)
    // console.log(human.name)
    //4 class 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Peop = new People('Manus', 12);
console.log(Peop)

//5 function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man)