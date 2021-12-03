function randomNum(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
  }

let resultNum = randomNum(1, 46); 
let lottoNum = [];
let index = lottoNum.length;
let value = lottoNum[index]; 
  
  while (index <= 7) {
    lottoNum.push(resultNum);
    if (value ==)
  }

 


function playLotto(){

    function randomNum(min, max) { 
      return Math.floor(Math.random()*(max - min)+min);
    };
    let result = randomNum(1, 41); 
    let lottoNum = []; 
  
    for (let i=0; i<7; i++){
    lottoNum[i].push(result);
  };
  }




  let randomNum = function(min, max){
      return Math.floor(Math.random()*(max-min)+min);
  }

  let generate_lotto = function(){
      let lotto = [];
      let index = 0;
      let number = 0;
      while (index < 6){
          number = randomNum(1,46);
          if(number == lotto.find(x=>x==number)){continue;}
          lotto[index] = number; 
          index++;
      }
      return lotto.sort(function(a,b){return a - b;});
  }

  console.log(generate_lotto());



//준홍님 코드 
  function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function tryLotto(...input) {
    if (input.length !== 6) {
      console.log('숫자를 6개 입력해야 합니다.');
      return;
    } else if (input.length !== new Set(input).size) {
      console.log('숫자를 중복되지 않게 입력해야 합니다.');
      return;
    } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
      console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
      return;
    }

    const selected = [];
    let count = 0;
    while (count < 7) {
        const selectedNum = randomNum(1, 46);
        if (!selected.includes(selectedNum)) {
            count++;
            selected.push(selectedNum);
        }
    }
    console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
    const nums = input.filter(v => selected.slice(0, 6).includes(v));
    switch (nums.length) {
        case 0: case 1: case 2:
            console.log('꽝!');
            break;
        case 3:
            console.log('★ 5등 당첨! ★');
            break;
        case 4:
            console.log('★★ 4등 당첨! ★★');
            break;
        case 5:
            if (input.includes(selected[6])) {
              console.log('★★★★ 2등 당첨!! ★★★★');
              nums.push(`보너스 ${selected[6]}`);
            } else console.log('★★★ 3등 당첨!! ★★★');
            break;
        case 6:
            console.log('★★★★★ 1등 당첨!!! ★★★★★');
    }
    if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}