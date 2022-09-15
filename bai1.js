
const Number = parseInt(prompt('liệt kê số nguyên tố'));
let n=2;
dem=0;
while (dem<=Number)
for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        document.write('số nguyên tố là:'+i+"<br>");
    }else {
        n++;
    }dem++;

}