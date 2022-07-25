const maxArea = function(height) {
    
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        maxArea = Math.max(maxArea, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};

const heightArray = process.argv[2].split(' ');

console.log(maxArea(heightArray));