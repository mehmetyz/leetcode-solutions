'use strict';

const longestPalindrome = function(s) {

    const size = s.length * 2 + 3;
    const table = new Array(size).fill('#');

    table[0] = "@";
    table[size - 1] = "#";

    
    let counter = 1;
    for (let c of s ){
        table[counter++] = '#';
        table[counter++] = c;
    }

    table[counter] = '#';



    let maxLength = 0;
    let start = 0;
    let maxRight = 0;
    let center = 0;


    const width = new Array(size).fill(0);

    for( let i  = 1; i < size - 1; i++){


        if(i < maxRight){ 
            width[i] = Math.min(maxRight - i, width[2 * center - i]);
        }

        while(table[i + width[i] + 1] === table[i - width[i] - 1])
            width[i]++;

        
        if(i + width[i] > maxRight){
            maxRight = i + width[i];
            center = i;
        }

        if(width[i] > maxLength){
            start = (i - width[i] - 1) / 2;
            maxLength = width[i];
        } 
    }
    
    return s.substring(start, start + maxLength);

}


const str = process.argv[2];
console.log(longestPalindrome(str));