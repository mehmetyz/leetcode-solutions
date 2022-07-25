

const matched = (str, search) => {

    let matched = "";
    for (let index = 0; index < str.length; index++) {
        if(str[index] !== search[index])
            break;
        
        matched += str[index];
    }

    return matched;
}


const longestCommonPrefix = function(strs) {
    
    
    let current = strs[0];
    
    for(let str of strs){
        current = matched(str, current);
    }
    return current;
};

const texts = process.argv[2].split(" ");
console.log(longestCommonPrefix(texts));