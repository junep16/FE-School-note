// Q1 
//다음 값의 평균과 표준편차를 구하세요 
// [10, 20, 30, 10, 20, 30, 40, 10]


let numbers = [10, 20, 30, 10, 20, 30, 40, 10]; 
let result = 0; 
for (let value of numbers) {
    result
}



let array = [10, 20, 30, 40, 50];
let result = 0; 
for (let i = 0; i < array.length; i++) {
result += array[i];
}
console.log(result/array.length);


//Q2 
// 다음 string의 평균 값을 구하세요

let data = '5, 4, 10, 2, 5'.split(','); 

let 합계  = 0; 
for (let i of data) {
    합계 +=  parseInt(i);  
}
console.log(합계/data.length); 


//Q3 
//다음 array의 합을 구하기 
let data = [11, 22, 33, 111, 2]; 

data + ''; 
data = data + ''; 
data = '11,22,33,111,2'.replace(/,/g,'');

let 합계 = 0; 
for (let i of data) {
 합계 += parseInt(i); 
}

//Q4 
//반복문 사용하여 콤마찍기 

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);

