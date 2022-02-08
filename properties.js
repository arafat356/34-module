const buttle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
//1 getting all property names
const keys = Object.keys(buttle);
// console.log(keys);
const values = Object.values(buttle);
// console.log(values);
const pairs = Object.entries(buttle);
// console.log(pairs);
// never can delete 
// [seal]if you seal something then you can't add anything and also can't delete 
// Object.seal(buttle);
Object.freeze(buttle);
buttle.price = 100;
buttle.height = 16;
// if you want you can delete any Object 
delete buttle.isCleaned;
// delete buttle.price;
console.log(buttle);

// sammary
/*
1.(object.keys)use to can take property from object
2.(Object.values)use to can take values of the object
3.(Object.entries)use to values can taek pairs
*/