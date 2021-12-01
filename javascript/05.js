// 10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
//1000미만의 자연수에서 3,5의 배수의 총합을 구하라.

let result = 0;

for (let x = 0; x < 101; ++x) {
    //console.log(x);
    if (x % 3 == 0 || x % 5 == 0) {
        //console.log(x);
        result += x
    } 
}

console.log(result);


let text = 'javascript'; 

for (let i =0; i < text.length; i++){
    console.log(text[i-1], text[i+1]);
} 


let values = [1, 3, 4, 8, 13, 17, 20]; 

for (let i = 1; i < values.length; i++){
    console.log(values[i-1], values[i]);
} 


let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i], value[i + 1])
    }
}
// 10점 만점에 6점 정도의 코드


// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
////////////////////////


// 1번째 순회(i==0, temp=3, result=0)
for (let i = 0; i < 8; i++) {
    if (3 > 3){
        temp = value[i+1] - value[i];
        result = i;
    }
}

// 2번째 순회(i==1, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (3 > 2){
        temp = 2;
        result = 1;
    }
}

// 3번째 순회(i==2, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (2 > 2){
        temp = value[i+1] - value[i];
        result = i;
    }
}

...