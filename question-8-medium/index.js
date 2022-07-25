'use strict';

const myAtoi = (str) => {
    
    let result = "";
    let isDigit = false;


    for(let i = 0; i < str.length; i++) {

        if(str[i] === ' ') {
            if(result === "")
            {
                continue;
            }
            else {
                break;
            }
        }
        
        if(str[i].match(/[A-Za-z\.]/))
            break;
        
        if(str[i].match(/[0-9]+/)) {
            isDigit = true;
            result += str[i];
        }
        
        if(str[i] === '-' || str[i] === '+')
        {
            if(isDigit){
                break;
            }
            else if(i > 0 && (str[i - 1] === '-' || str[i - 1] === '+')){
                return 0;
            }
            else
                result += str[i];
        }
    }

    if(result === "" || (result.length === 1 && (result[0] === '-' || result[0] === '+')))
        return 0;


    const floatValue = parseFloat(result);
    if(floatValue > Math.pow(2, 31) - 1)
        return Math.pow(2, 31) - 1;
    else if(floatValue < -Math.pow(2, 31))
        return -Math.pow(2, 31);
    else
        return parseInt(result);



}

const str = process.argv[2];
console.log(myAtoi(str));

