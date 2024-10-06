//rotating a string by k
function stringRotate(str, k) {
    let strArr = str.split("");
    k = k % strArr.length;
    let temp = [];
    for (let i = 0; i < k;  i++) {
        let character = strArr.pop();
        temp.unshift(character); 
    }
    temp = temp.join("");
    strArr = strArr.join("");
    temp = temp + strArr;
    return temp;
}

//better sol
function stringRotate2(str, k) {
    let temp = "";
    k = k % str.length;
    for (let i = str.length - k; i < str.length; i++) {
        temp += str[i];
    }
    for (let i = 0 ; i < str.length - k; i++) {
        temp += str[i];
    }
    return temp;
}

console.log(stringRotate("satyam", 1));
console.log(stringRotate("satyam", 2));
console.log(stringRotate("satyam", 3));
console.log(stringRotate2("satyam", 4));
console.log(stringRotate("satyam", 5));
console.log(stringRotate("satyam", 6));
console.log(stringRotate2("satyam", 7));
