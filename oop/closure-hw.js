function getMathModule(x) {
    let y = 5;
    return {
        getSum: () => {
            return x + y;
        },
        getSubsctraction: () => {
            return x - y;
        },
        getMultiplication: () => {
            return x * y;
        },
        getDivision: () => {
            return x / y;
        }
    };
}

let calc = getMathModule(10);
console.log(calc.getSum(), calc.getSubsctraction(), calc.getMultiplication(), calc.getDivision());
