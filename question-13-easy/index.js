
const romanToInt = function(s) {   

    let roman = Object.freeze({
        'I': 1,
        'IV': 4, 
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    });
    
    let index = 0;

    let sum = 0;
    while (index < s.length) {

        let v = s.substring(index, index+2);
        if (roman.hasOwnProperty(v)) {
            sum += roman[v];
            index += 2;
        }
        else {
            sum += roman[s[index++]];

        }
    }

    return sum;
};


const roman = process.argv[2];
console.log(romanToInt(roman));