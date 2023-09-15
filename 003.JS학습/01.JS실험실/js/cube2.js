// g회전제어 JS - cube2.js //////////////

/************************************* 
    [구현내용]
    - 마우스휠 이벤트에 따라 기본기능은
    막고 큐브를 회전하는 속성인 transform의
    rotateY(각도)의 값변경을 이용한
    큐브 회전을 적용함!
    - 대상 : window
    - 사용이벤트 : wheel
    - 단위각도 : 360도 / 9개 = 40도
    - CSS 이징적용 : ease-out

*************************************/

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

  // 0. 변수셋팅
  // 단위각도
  const DEG = 40;
  // 광휠상태변수(0-허용, 1-금지) 
  let stsWheel = 0;
  // 휠제어 시간
  const TIME_WHEEL = 10;
  // 휠 단위수
  let numWheel = 0;

  // 1. 대상선정 ; .cube
  const cube = domFn.qs('.cube');
  console.log(cube);

  // 2. 이벤트 설정하기
  domFn.addEvt(window, 'wheel', rotateMem);

  // 3. 함수 만들기 ////////////////////////
  function rotateMem(){


    // 0. 휠 이벤트 발생수 조절하기 (광휠금지)
    if(stsWheel) return;
    stsWheel = 1;
    setTimeout(() => {
        stsWheel = 0;
    }, TIME_WHEEL);

    // 1. 휠방향 알아내기 : 휠델타
    let delta = event.wheelDelta;
    console.log(delta);

    if(delta < 0){
        numWheel++;
    }
    else{
        numWheel--;
    }

    console.log('휠!',numWheel);

    // 3. 회전대상요소에 각도 적용하기
    cube.style.transform = 
    `rotateY(${numWheel*DEG}deg)`;

  } ////////////////////////////// rotateMem /////////////////