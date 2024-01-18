const car = {
    Make: 'Maruti Suzuki',
    Model: 'Dzire',
    Year: 2024
}
function carProperties(){
    for(let prop in car){
        console.log(`${prop} : ${car[prop]}`);
    }
}
carProperties();