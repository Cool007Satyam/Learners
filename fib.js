let fib = (num) => {
    let a = 0, b = 1;
    let arr = [];
    arr.push(a);
    arr.push(b);
    let temp = 1;
    if (num > 3 && temp <=100) {
        for (let i = 3; i <= num && temp < 100; i++) {
            temp = arr[arr.length - 1] + arr[arr.length -2];
            arr.push(temp);
            console.log(temp);
        }
    }
}

fib(28);