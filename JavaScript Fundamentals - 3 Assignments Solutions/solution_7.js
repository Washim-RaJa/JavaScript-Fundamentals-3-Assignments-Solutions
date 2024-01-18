const userRecord = new Map();

function addUser(name,age,email){
    let userInfo = {age,email};
    userRecord.set(name,userInfo);
}
function updateUser(name,age,email){
    if(userRecord.has(name)){
        let userInfo = userRecord.get(name);
        userInfo.age = age;
        userInfo.email = email;
    } 
}
function deleteUser(name){
    if(userRecord.has(name)){
        userRecord.delete(name);
        console.log(userRecord);
    }
    else{
        console.log(`Enter a valid user then proceed to delete`)
    }
}


addUser('John',23,'john123@gmail.com');
addUser('Peter',18,'peter456@gmail.com');
console.log(userRecord);


updateUser('John',32,'johncena0@gmail.com');
updateUser('Peter',28,'peterparker1@gmail.com');
console.log(userRecord);


deleteUser('John');

deleteUser('Sam');
