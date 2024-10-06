let merge = (arr1, arr2) => {
    let arr = [];
    let i = 0, j = 0;
    while (i <arr1.length && j <arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

console.log(merge([1, 3, 7, 8], [1, 2, 4, 4, 9]));

console.log(merge([1, 3], []));

console.log(merge([],[2, 4, 8]));

console.log(merge([], []));