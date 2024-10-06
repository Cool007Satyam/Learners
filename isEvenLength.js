function filterEvenLength(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i].length % 2 == 0) {
            arr.splice(i, i+1);
        } else {
            i++;
        }
    }
    return arr;
}

console.log(filterEvenLength(["satyam", "raghav","hello", "aa"]));
