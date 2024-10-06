let replace = (str) => {
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (i %2 == 0 && "aeiou".includes(strArr[i].toLowerCase())) {
            strArr[i] = "*";
        }
    }
    let str2 = strArr.join("");
    return str2;
}

console.log(replace("love nEvir dIes"));

//not considering spaces now

let replace2 = (str) => {
    let i = 0 , flag = 0;
    let newStr = "";
    while (i < str.length) {
        if (str[i] == " ") {
            if (flag == 0)
                flag = 1;
            else
                flag = 0;
        }
        if (flag == 0) {
            if (i % 2 == 0 && "aeiou".includes(str[i].toLowerCase())) {
                newStr += "*";
            } else {
                newStr += str[i];
            }
        } else {
            if (i % 2 == 1 && "aeiou".includes(str[i].toLowerCase())) {
                newStr += "*";
            } else {
                newStr += str[i];
            }
        }
        i++;
    }
    return newStr;
}

console.log(replace2("love nEvir dIes"));
                    //0123 45678 9
                    //    456789     


