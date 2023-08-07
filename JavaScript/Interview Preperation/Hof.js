const radius = [2,5,1,8];

const area = function (radius){
    return Math.PI * radius * radius;
};

function calculate(radius,logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
};

const b = calculate(radius,area);
console.log(b)

