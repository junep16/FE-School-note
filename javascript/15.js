// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// 단어가 6자인 것만 가져오는 것 
// true인 것만 가져온다 
// 대부분 const만 사용한다 


//5보다 큰 값 가져오기 
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
const result2 = x.filter( xs => xs > 5);


// 회원정보 

let 회원정보 = [{
    아이디 : 'jjang1',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2019-12-2',
    주접속위치 : '125.242.161.149'
},{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남', 
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2020-12-2',
    주접속위치 : '125.242.161.149'
},{
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-2',
    주접속위치 : '125.242.161.149'
},{
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2020-12-2',
    주접속위치 : '125.242.161.149'
}]; 


//1번 남자이면서 아이디가 2021년도 가입하신 분

const result2 = x.filter( xs => xs > 5);

(el) => el.성별 === "남" && el.가입연도.split("-")[0] === "2021"

// 내답 : 틀림 
// let v = 회원정보.filter(el => el.성별 === '남') && (el => el.가입연도 === el.가입연도.indexOf('2021')); 
//동시에 만족하는 거 && 


//2번 아이디가 jjang인사람 고르기 
let b = 회원정보.filter(d => d.아이디.value === 'jjang')

//filter : 다 돈다. 찾아도 돈다.
//find : 찾으면 멈춘다. --> 고유한 값을 찾을 땐 효율을 위해 find 사용이 좋다!!!!!!!!!!!!!!!



// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : '일상'
}, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : '개발'
}, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : '취미'
}, {
    id : 4,
    title : 'title4',
    content : 'content4',
    section : '개발'
}];

let s = '개발'
let data = s? blogs.filter(b => b.section === s) : blogs; 
