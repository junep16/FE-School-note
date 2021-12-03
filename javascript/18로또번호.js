//set으로 만들기 
//set은 값을 반복하지 않는다!!!! 

// 1. 랜덤번호 뽑아주는 함수
function randomNum(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
  }

// 2. 로또번호 set 만들어주기 
let lottoNum = new Set(); 

// 3. 로또 번호뽑는 함수 만들기 

function playLotto(){
    while (lottoNum.size < 6){
        let result = randomNum(1,46); 
        lottoNum.add(result); 
    }

    return lottoNum; 
}

playLotto(); 


//array로 만들어보기 