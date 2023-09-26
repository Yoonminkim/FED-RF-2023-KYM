// JS6-1.Date객체와 Math객체 JS

// DOM 함수 모듈
import dFn from "./dom.js";

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = dFn.qsa(".tt");
console.log(tt);

let checking;

const stopbtn = dFn.qs(".stop");
const playbtn = dFn.qs(".play");
const imbx = dFn.qs(".imbx");


console.log(stopbtn);

dFn.addEvt(stopbtn, "click", () => {
    clearInterval(checking);
    console.log("시간 멈춰!");
});
dFn.addEvt(playbtn, "click", () => {
    AutoTime();
    console.log("시간 다시 가즈아~");
});

// 3. 시간찍기
// JS 시간날짜 객체 : date()

const week = ["일", "월", "화", "수", "목", "금", "토"];

AutoTime();

function AutoTime() {
    checking = setInterval(() => {
        TimeSet();
        colorImg();
    }, 1000);
    console.log("시간 가즈아~");
}

// tt[1].innerText = today.getFullYear();

// let monthName = ["", "", "", "", "", "", "", "", "", "", "", ""];
// tt[2].innerText = today.getMonth();

// 앞에 0자릿수를 추가하는 함수 만들기
const addZero = (num) => (num < 10 ? "0" + num : num);

function TimeSet() {
    const today = new Date();
    let rdm = Math.random();
    let H = today.getHours();
    let M = today.getMinutes();
    let S = today.getSeconds();

    // // 3-1. 년도찍기 : getFullYear()
    tt[0].innerText = today.getFullYear();
    // 참고: getYear()는 1900년을 뺀 년도가 나옴

    // // 3-2. 월찍기
    tt[1].innerText = today.getMonth();
    // 찍어보면 기존 달보다 1작다
    // 이것은 배열순번에 넣고 찍기 좋도록
    // 월 순번이 리턴된다

    // 3-3. 일찍기 : getDate()
    tt[2].innerText = today.getDate();
    // 날짜는 그대로 리턴됨!

    // 3-4. 요일찍기 :
    tt[3].innerText = week[today.getDay()];
    // 요일은 순번을 리턴함 (0부터)
    // 각 나라별요일을 배열로 넣고 출력함

    // 3-5. 오전/오후 찍기 :
    tt[4].innerText = H < 12 ? "오전" : "오후";

    // -> 시간은 보통 한자리숫자일때 앞에 0자리 표시함
    // 01, 02, 03... -> 이것은 숫자가 아니고 문자임!

    // 3-6. 시간출력 : getHours()
    tt[5].innerText = addZero(H > 12 ? H - 12 : H);
    // 12보다 크면 12를 빼주고 한자리일때 0처리는 항상해줌!

    // 3-7. 분 출력 : getMinutes()
    tt[6].innerText = addZero(M);
    // 3-8. 초 출력 : getSeconds()
    tt[7].innerText = addZero(S);

    console.log("시간 가져와잇!");

    // rdm = Math.floor(rdm*7)+1;
    // console.log(rdm);
    // console.log('내림 추가', Math.floor(rdm));

    // imbx.innerHTML = `<img src="./images/img${rdm}.jpg"></img>`;

}

/*************************************** 
    [ Math 객체 ]
    - 수학객체로써 다른 객체와 달리
    new키워드 없이 바로 사용할 수 있게 설계됨
    - 이런객체를 정적객체(Static Object)라고함
    -> 정적객체들!
        Array(), Object(), Math()
    ______________________________

    [ 주요 Math 객체의 메서드들 ]
    Math.min(값들) - 최소값
    Math.max(값들) - 최대값
    Math.round(실수값) - 반올림
    Math.floor(실수값) - 내림
    Math.ceil(실수값) - 올림
    Math.abs(양수나 음수값) - 절대값
    ______________________________

    Math.random() - 난수발생
    -> 0~1  사이의 소수점값 17자리수

***************************************/

// 1~7 사이 난수 발생하기
// 방법: 난수에 발생할 최대수 곱하기 -> 올림or내림 진행

/**************************************** 
 * 
    [ 내가 원하는 난수 만들기 ]

    1. 먼저 난수를 발생시킨다!
    Math.random()

    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
    Math.random() * 최대수

    3. 원하는 범위의 난수를 올림처림함
    Math.ceil(Math.random() * 최대수)

    ________________________________

    [ 중간 범위의 난수 만들기 ]

    1. 1부터 최대수 랜던수를 먼저구한다
    Math.random() * 최대수

    2. 원하는 범위의 시작수 만큼 더함
    Math.ceil(Math.random() * 최대수) + 시작수만큼

    (만약 0부터 시작수로 하면 내림을 적용!
    -> Math.floor())
    ___________________________________

    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
    -> 최대수는 6, 시작수 만큼 더할 수는 3
    Math.ceil(Math.random() * 최대수) + 시작수만큼
    Math.ceil(Math.random() * 6) + 3
    ________________________________

    [ 중간범위 수 계산 ]
    작은수 ~ 큰수
    1. 최대수 = 큰수 - 작은수 + 1
    2. 시작수차이 = 작은수 - 1;


****************************************/

// let sui = Math.random();

// console.log("최대값", Math.floor(sui * 6) + 3);

// 이미지 웹경로 배열
const rimg = [
    "https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg",
    "https://d2qqqnyszmt41w.cloudfront.net/wp-content/uploads/2021/04/23150534/202104231445162082.jpg", 
    "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg", 
    "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg"];


console.log(rimg);

// 1. 요구사항: 웹경로 이미지를 화면에 넣고 랜덤하게
// 이미지를 컬러로 + 약간 커지게 변경한다 (클래스 on을 주어서)
// 2. imbx 생성 완료.

// 3. 이미지 넣기

rimg.forEach(val => {
    imbx.innerHTML += `
    <div>
        <img src="${val}" alt="랜덤"></img>
    </div>
    `
})

const target = dFn.qsa('img');

console.log(target);

// 직전 랜덤수 : 초기셋팅은 0~3 사이수가 아닌 수
let bNum = 1000;

function colorImg() {

    let sui = Math.floor(Math.random()*4);
    console.log(sui);
    
    while(sui == bNum){ // 현재 랜덤수가 직전 랜덤수와 같냐?
        // 다시 랜덤발생!
        sui = Math.floor(Math.random()*4);
        console.log('다시랜덤',sui);

    } /////////////////// while//////////////
    bNum = sui;


    // 2. 대상에 클래스 on 넣기
    // 나머지는 빼기

    target.forEach((ele,idx) => {
        if(idx == sui)
            ele.classList.add('on');
        else
            ele.classList.remove('on');
    });

    console.log(target);

}



