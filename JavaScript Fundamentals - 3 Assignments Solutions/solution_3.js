function objProperties(inputObject){
    let inputObjectKeys = Object.keys(inputObject);
    return inputObjectKeys.length;
}

let obj1 = {id:111,name:'John',age:18};
let obj2 = {id: 999, name: 'Peter', age: 20, city: 'Mumbai'};
let obj3 = {name: 'Sam', age: 21, height: '165 cm', city: 'Delhi', department: 'Web Dev'};

console.log(`This object has ${objProperties(obj1)} properties`);

console.log(`This object has ${objProperties(obj2)} properties`);

console.log(`This object has ${objProperties(obj3)} properties`);