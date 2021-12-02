// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

// method chaining 
'1001001010'.replace(/1/g, '#').replace(/0/g, ' ');

// map 
square root
array.map(Math.sqrt).map(x=>x**3)


let data = [{ 
    반 : 1, 
    번 : 1, 
    이름 : "지윤", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 2, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 2, 
    이름 : "규리", 
    중간고사점수 : 100
}]; 

console.log(data.map(x => x.중간고사점수))
console.log(data.map(x => [x.이름, x.중간고사점수]))




const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}

array.forEach(x => result.push(x**2));
undefined
result
(4) [1, 4, 9, 16]


let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
undefined
let newData = data.map(a => a.map(n => n *2));


// 값이 바뀌기 때문에 주의.. 배열 값을 바꾸면 안됨!!! 신입사원들 많이하는 것 
// array, object. class는 값을 넘겨줄 때 변경되지 않도록 주의!!!! 
let x = [10, 20, 30]; 
function test(a) {
    a[0] = 10000; 
}

test(x)
x
 


