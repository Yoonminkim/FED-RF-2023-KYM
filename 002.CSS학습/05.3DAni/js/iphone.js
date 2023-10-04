
// 움직이는 폰 + 무한글자이동 JS - iphone.js

import dFn from './dom.js';

/************************************* 

    [ 아이폰 영역오버시 회전기능 ]
    1. 화면에 10등분된 투명 영역을 구현
    2. 이 영역이 이벤트 대상이 됨
    3. 오버시 변경대상인 아이폰에 회전값 변경
    4. 트랜지션으로 애니메이션 설정적용!
    5. 애니메이션 후에 이벤트박스를 보이게함
    (최초 width:0 -> width:100vw)
    
*************************************/


// 0. 데이터 셋팅 : x,y 축 회전 각도를 배열에 셋팅!
const iDeg = [
    // 상단영역
    [30,-60, "simpson.png"],
    [30,-30, "Marge_Simpson.png"],
    [30,0, "Bart_Simpson.png"],
    [30,30, "Lisa_Simpson.png"],
    [30,60, "Maggie_Simpson.png"],
    // 중간영역
    [0,-60, "newyorkCity.jpg"],
    [0,-30 , "parisCity.jpg"],
    [0,0, "img1.jpg"],
    [0,30, "seoulCity.jpg"],
    [0,60, "img3.jpg"],
    // 하단영역
    [-30,-60, "pluto.png"],
    [-30,-30 , "earth.png"],
    [-30,0, "jupiter.png"],
    [-30,30, "saturn.png"],
    [-30,60, "sun.png"]
];

// 이벤트 박스에 속박스 넣기
const eBox = dFn.qs('.evt-box');
for(let i = 0 ; i < iDeg.length ; i++){
    eBox.innerHTML += `<div></div>`;
}

// 1. 대상선정
// 1-1. 이벤트 대상 : .evt-box div
const evtBox = dFn.qsa('.evt-box div');

// 1-2. 변경대상 : .iphone
const iphone = dFn.qs('.iphone');

// 1-3. 화면대상 : .iphone #screen
const screen = dFn.qs('#screen')

console.log(evtBox, iphone);


// 2. 이벤트 설정 : 이벤트 종류 - mouseenter(경계선 들어옴)
evtBox.forEach((ele,idx)=>
        dFn.addEvt(ele, 'mouseenter', ()=>seeMe(idx)));

// 3. 함수 만들기 //////////////////
function seeMe(seq){ // seq - 순번받기
    console.log('나를봐', event.currentTarget, seq);

    // 1. 변경 적용하기 : 대상 - .iphone
    iphone.style.transform = `
        rotateX(${iDeg[seq][0]}deg) rotateY(${iDeg[seq][1]}deg)
    `;
    iphone.style.transition = `.4s ease-out`;
    screen.style.backgroundColor = `#fff`;
    screen.style.backgroundImage = `url(../images/${iDeg[seq][2]})`;

    // 2. 변경 적용하기 : 앞면 이미지 

} ///////////////// seeMe 함수 ///////////

// 이벤트 영역 박스 5초후 작동되도록 width 값 변경하기 ///
const time = setTimeout(()=>{eBox.style.width = '100vw'},5000);

// 마우스 포인터 변경하기
// 대상 : .evt-box -> eBox 변수
dFn.addEvt(eBox,'mouseenter',function(){
    console.log('마우스 포인터바뀜');
    // 1. 이 박스범위안에서 커서 없애기
    this.style.cursor = 'none';

    // 2. 커서박스 읽어와서 셋팅하기
    let cursorImg = dFn.qs('.cursor-box');
    cursorImg.style.position = 'fixed';
    cursorImg.style.width = '50px';
    cursorImg.style.height = '50px';
    cursorImg.style.background = 
    'url(./images/mancity.png) no-repeat 0/100% 100%';


    // 3.이 박스 범위에서 mousemove이벤트 발생시 커서 위치이동셋팅
    dFn.addEvt(this,'mousemove',(e)=>{
        cursorImg.style.top = e.pageY + 'px';
        cursorImg.style.left = e.pageX + 'px';
    });
    
}); /////////////// mouseenter 함수 ////////////
/* 
    [ 마우스 오버/아웃 관련 이벤트 차이점]
    1. mouseover / mouseout : 요소자체를 기준
    2. mouseenter / mouseleave : 요소 경계선 기준
    -> 둘의 차이는 이벤트 버블링에 있다!
    -> 경계선 기준의 이벤트인 mouseenter / mouseleave는
    자체 요소에서만 발생하고 버블링되지 않는다!
    -> 자손요소에서 버블링되어 발생하는 mouseover / mouseout으로
    셋팅할 경우 빈번한 이벤트 발생이 문제가 될 경우
    mouseenter / mouseleave를 사용할 것을 w3c가 권고!
*/






