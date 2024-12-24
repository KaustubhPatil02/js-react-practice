export const calculateLogic = (prevalue, operator, nextvalue)=>{
    const num1 = parseFloat(prevalue);
    const num2 = parseFloat(nextvalue);
    
    if(isNaN(num1)  || isNaN(num2)){
        return '';
    }

    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? (num1 / num2).toString() : "Error or undefined"
    }
};