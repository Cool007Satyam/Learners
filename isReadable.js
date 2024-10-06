function containMore(str) {
    flag = 0;
    for (let  i = 0 ; i < str.length; i++) {
        if((str[i] == 0 || str[i] == 1 || str[i] == 8)) {
            if (flag == 0)
                flag = 0;
            else
                flag = 1
        } else if(str[i]== 6 || str[i] == 9) {
            flag = 1;
        } else {
            flag = 2;
            break;
        }
    }
    return flag;
}
function isReadable(num) {
    num = num.toString();
    let temp = containMore(num);
    if ( temp == 0 || temp == 1) {
        return true;
    }
    return false;
}

function isSame(num) {
    let temp = num;
    if (isReadable(temp)) {
        num = num.toString();
        let i = 0, j = num.length - 1, flag = 0;
        while(i <= j && flag == 0) {
            if ((num[i] == 0 || num[i] == 1 || num[i] == 8) && num[i] == num[j]) {
                flag = 0;
            } else {
                if((num[i] == 6 && num[j] ==9) || (num[i] == 9 && num[j] == 6)) {
                    flag = 0;
                } else
                    flag = 1;
            }
            i++;
            j--;
        }
        if (flag == 0) {
            return true;
        }
    }
    return false;
}

console.log(isSame(9001006))