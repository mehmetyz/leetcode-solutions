
const isMatch = function(s, p) {
 
    const textLength = s.length;
    const patternLength = p.length;

    let dpMatrix = new Array(textLength + 1);
    for (let i = 0; i <= textLength; i++)
        dpMatrix[i] = new Array(patternLength + 1).fill(false);

    
    dpMatrix[0][0] = true;


    for(let i = 1; i <= patternLength; i++){
        if(p[i - 1] === '*')
            dpMatrix[0][i] = dpMatrix[0][i - 2];
    }


    for(let i = 1; i <= textLength; i++){
        for(let j = 1; j <= patternLength; j++){
            if(p[j - 1] === '.' || p[j - 1] === s[i - 1])
                dpMatrix[i][j] = dpMatrix[i-1][j-1];
            else if (p[j - 1] === '*') {
                
                dpMatrix[i][j] = dpMatrix[i][j - 2];
                if(s[i - 1] === p [j - 2] || p[j - 2] === '.'){
                    dpMatrix[i][j] = dpMatrix[i][j] | dpMatrix[i - 1][j];
                }
            }
            else {
                dpMatrix[i][j] = false;
            }
        }
    }
    
    return dpMatrix[textLength][patternLength];
}


const print2DArrayBeautify = function(array) {
    console.log(array.map(row => row.map(col => col ? 'T' : 'F').join('')).join('\n'));
}


const text = process.argv[2];
const pattern = process.argv[3];

console.log(isMatch(text, pattern));