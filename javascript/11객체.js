let person = {
    //key: value
    name: '이호준',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
    기능 : sum
  }

console.log(person) 

console.log(person.name)

Object.keys(person); 
// ['10', 'name', 'age', 'height', 'weight', '이력']
Object.values(person);
//[20, '자스', 10, 30, 40, {…}]
let data = Object.entries(person);
//데이터를 배열로 만들어 줌. 이를 통해 반복문으로 뽑아내는게 가능. 

for (let i of Object.entries(person)) {
    console.log(i[0], i[1]);
}


// value: '이호준',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false