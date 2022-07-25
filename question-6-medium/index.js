'use strict';


const convert = (s, numRows) => {

    let i = 0;
    let j = 0;
    let isColumnDecrement = false;

    let size = numRows * 2 - 2;
    
    let result = [];

    for (let c of s ){

        if(i == 0 && j == 0 ){
            result[0] = c;
            i++;
            continue;
        }

        if(i === numRows - 1){
            isColumnDecrement = true;
        }

        else if(i === 0){
            isColumnDecrement = false;
        }
        
        
        result[i * size + j + 1 ] = c;

        if(isColumnDecrement){
            if(i !== 0)
                i--;
            j++;
        }

        else{
            i++;
        }
    }

    printArray(result);

    return result.join('');
}


const printArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


const arg = process.argv[2];
const numRows = process.argv[3];
console.log(convert(arg, numRows));