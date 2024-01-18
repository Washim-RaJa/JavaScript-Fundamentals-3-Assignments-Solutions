function propertyChecker(objectName,PropertyName){
    if(objectName.hasOwnProperty(PropertyName)){
        console.log(`Yes it has '${PropertyName}' as a property`);
    }
    else{
        console.log(`No it doesn't have '${PropertyName}' as a property`);
    }
}
let obj1 = {id:111,name:'John',age:18};

propertyChecker(obj1,'id');

propertyChecker(obj1,'city');