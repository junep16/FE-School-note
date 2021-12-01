//배열 

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');

//과일 출력 

과일[0]; 





for (let i in sample) {
    sample[i] *= 2 // sample[i] = sample[i] * 2
}
sample


for (let i of sample) {
    sample[i] *= 2 
}
sample




let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
  ];

    let student1 = 전교점수[0][0];
    let result1 = 0;
    for (let i = 0; i < student1.length; i++){
        result1 += student1[i];
        }
    console.log(result1/student1.length);

    let student2 = 전교점수[1][1];
    let result2 = 0;
    for (let i = 0; i < student2.length; i++){
    result2 += student2[i];
    }

    console.log(result2/student2.length);

    let 반평균 = (result1 + result2) / (student1.length + student2.length);
    console.log(반평균);


    //풀이 
    function average(arr){
        let sum = 0;
         arr.forEach(el => sum+=el);
        return sum;
        }


    //강사님 풀이 
    let 총합 = 0; 
    let 더해진수 =0; 
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++){
        총합 += 전교점수[0][i][j]; 
        더해진수++; 
        }
    }   
    총합/더해진수 


    let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
    let 꺼낸과일 = 과일.pop();


    let 전화번호 = '010.1000.1000';
    undefined
    전화번호.split('.')
    (3) ['010', '1000', '1000']  
    전화번호.split('.').join('-')
    '010-1000-1000'
    과일
    (6) ['사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
    과일.shift()
    '사과'
     과일
    (5) ['수박', '복숭아', '딸기', '바나나', '한라봉']
    과일.unshift('천혜향')
    6
    과일
    (6) ['천혜향', '수박', '복숭아', '딸기', '바나나', '한라봉']