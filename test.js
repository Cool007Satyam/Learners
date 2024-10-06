// console.log("working");
// let set = new Set([1, 2, 3]);
// console.log(set);
// for (let i of set) {
//     console.log(i);
// }
// let x = 23;
// let y = "satyam";

// console.log( x == y);

// let myfunc = (a, b) => {
//     return a+b;
// }

// console.log(myfunc(2,3));

// iteration approach
let fact =(a) => {
    ans = a;
    for (let i = a - 1; i >=1 ; i--) {
        ans *= i;
    }
    return ans;
}

//recursive approach
let fact2 = (a) => {
    if (a == 1) {
        return a;
    } else {
        return a * fact2(a-1);
    }
}

//even multiptles of 7 till a number
let sevenMultiples = function (num) {
    let i = 14;
    while ( i <= num) {
        console.log(i);
        i += 14;
    }
}
sevenMultiples(200);

//isPalindrome
let isPalindrome = function(num) {
    let reverse = 0;
    let temp = num;
    let count  = 0;
    while (temp > 0) {
        if (count == 0) {
            reverse += temp % 10;
            count = 1;
        } else {
            reverse = reverse * 10;
            reverse += temp % 10;
        }
        temp = Math.floor(temp/10);
    }
    console.log(reverse);
    console.log("IsPalindrome", reverse === num);
}
isPalindrome(151);

let m = 150/10;
console.log(m);