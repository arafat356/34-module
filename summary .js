const pet = {
    brand: 'econo',
    price: 10,
    writePoem: function(food) {
        console.log(food);
    }
}

const keys = Object.keys(pen);
const values = Object.values(pen);

for (const key in pen) {
    console.log(pen[key])
}

const aBounded = pen.writePoem.bind(a);
aBounded();

//this is changeable value ,which is change other place to other thing