const cars = [1,5,85,78,95,35,71,69];
const car = ["bmw","Jaguar","landrover","tata","Honda","toyota"];

let text = "";
for (let i in car){
    if (i == 2){
        break;
    }
    text += cars[i] + " ";
}

console.log(text);

let texxt = "";
for (let i in car){
    if (i == 2){
        continue;
    }
    texxt += car[i] + " ";
}

console.log(texxt);