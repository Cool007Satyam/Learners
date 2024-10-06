function subArraySum(arr, target) {
    if (arr.length == 1) {
        if (arr[0] === target) {
            return arr;
        }
        return false;
    } else {
        let temp = 0;
        let n = arr.length;
        let  i = 0, j = i+1;
        temp = arr[i] + arr[j];
        while (i <= j && i < n && j < n) {
            if (temp < target) {
                j++;
                temp += arr[j];
            } else if (temp > target) {
                temp -= arr[i];
                i++;
            } else {
                if (i < j)
                    return arr.slice(i, j+1);
                else
                    return arr.slice(i, i+1);
            }
        }
        return false;
    }
}

console.log(subArraySum([3, 1, 2, 2, 4], 5));
console.log();
console.log(subArraySum([4, 1, 6, 2, 3], 7));
console.log();
console.log(subArraySum([1, 7], 7));
console.log();
console.log(subArraySum([0, 7], 7));