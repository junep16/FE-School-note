

//평균값내기  

let array = [10, 20, 30, 40, 50];
let result = 0; 
for (let value of array) {
result += value;
}
console.log(result/array.length);

// for : in은 인덱스값 출력 / of는 값을 출력


// 인덱스값을 뽑음 
for (let value in array) {
    console.log(array[value]);
}

// 2씩 증감 
let i = 0; 
    while(i < 100) {
    console.log(i); 
    i+=2; 
}


// 구구단 while문으로 (while의 이중반복문)
// while이 중첩된 이유? 

let a = 2;
let b = 1;  

while (a < 10) {

    while (b < 10){
        console.log(`${a} X ${b} = ${a*b}`);
        b++;
    }
    a++; 
    b = 1;
};

// 특정 문단에서 멈추고 싶을 때 x5 까지만 출력 
let a = 2;
let b = 1;  

while (a < 10) {
    while (b < 10){
        console.log(`${a} X ${b} = ${a*b}`);
        if (b == 5) {
            break;
        }
        b++;
    }
    if (a == 5) {
        break;
    } 
    a++; 
    b = 1;
};



let i = 0; 
while (i <= 9) {
    //두번째 순회할 때 j가 있는지 확인 
    if (i == 1) console.log(j); 
    let j = 1; 
    i++; 
}

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i === 5) break outer;
        console.log(`${i} X ${j} = ${i*j}`);
    }
}



