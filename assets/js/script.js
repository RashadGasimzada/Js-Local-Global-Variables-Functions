// arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function
let arr = [1,2,3,4,5];
let result = 0;

function sum() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            result += arr[i] * arr[i];
    }
    console.log(result);
}
sum();

// n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function

let n = 21;

function isDivided() {
    if (n % 3 == 0 && n % 7 ==0) {
        console.log("n is divided");
    }
    else {
        console.log("n is not divided");
    }
}

isDivided();