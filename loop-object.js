const buttle = {
    color: 'Green',
    hold: 'Water',
    price: 39,
    isCleaned: true
};

/* type of for loop
1.for (let i = 0; i< 10;i++){}
2.for(const num of nums){} //array
3.for(const prop in student){} //object
*/
for (const prop in buttle) {
    // console.log(buttle[prop])

};

const keys = Object.keys(buttle);
// console.log(keys)
for (const prop of keys) {
    console.log(prop, buttle[prop])
}

// advanced 
const entries = Object.entries(buttle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(buttle)) {
    console.log(key, value);
};

//
// const array = ['color','heans','tom']