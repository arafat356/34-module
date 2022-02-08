// using object literal 
const student = {name: 'sakib al hasan',job:'cricketer'};
// construtor
const person = new Object();
// console.log(person)
// another one 
// const human = Object.create(null)
const human = Object.create(student)
// console.log(human.name)

class People {
         constructor(name, age){
                  this.name = name;
                  this.age = age;
         }
}
const Peop = new People('Manus',12);
console.log(Peop)

// function 
function Manus(name){
         this.name = name;
}
const man = new Manus ('kader');
console.log(man)