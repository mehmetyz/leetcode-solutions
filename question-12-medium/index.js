
const intToRoman = function(num) {
    const romanBases = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    if(romanBases[num])
        return romanBases[num];
    
    const bases = Object.keys(romanBases);

    let result = "";
    let counter = bases.length - 1;
    while(num > 0) {
        
        if(num < bases[counter])
        {
            counter--;
            continue;
        }

        const base = bases[counter];
        result += romanBases[base];
        num = num - base;
    }

    return result;
};

const num = parseInt(process.argv[2]);
console.log(`res: ${intToRoman(num)}`);