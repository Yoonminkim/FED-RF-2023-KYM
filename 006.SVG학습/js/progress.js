// progress 페이지 JS

// 요구사항1 : 원형 SVG를 각 %를 다르게 하여 숫자%와 함께
// 진행율을 애니메이션 하여 표현한다!

// 1. 대상선정
// 1-1. 버튼 : .act button
const btnAct = $('.act button');

// 퍼센트 원
const btns = $('.btns');
console.log('대상:',btnAct, btns);

// 진행바
const lineper = $('.lineper');

// 2. 이벤트 설정
// 대상.click() 하면 계속 이벤트 적용되므로
// 대상.one('click', 함수) 한번만 이벤트 적용하는 메서드 사용!
// 제이쿼리 = 내부적으로 여러요소는 개별적으로 for문으로
// 셋팅하므로 forEach 같은 제어를 할 필요가 없다!

btnAct.one('click', function(){
    console.log('나버튼!',$(this).text());

    // 1. 버튼별 분기하기 ////
    if($(this).text()=='팽수1'){
        progFn(0,75);
        progFn(1,63);
        progFn(2,89);
        progFn(3,95);
    } //////// if //////////////////////
    else if($(this).text()=='팽수2'){
        prog2Fn();
    }

}); /////////////// click //////////////

/********************************************************
    함수명 : progFn
    기능 : 퍼센트 증가에 따른 숫자, 그래프 변경
********************************************************/
function progFn(seq, max){ // seq - 순번
    // seq - 순번, max - 최대%값

    // [1] 숫자 퍼센트 증가
    // 1. 해당순번의 숫자요소
    let ptxt = btns.eq(seq).find('.ptxt');
    // 2. 퍼센트 증가 : 읽어온 숫자를 1씩 증가시킨다!
    let num = ptxt.text(); // 문자형 숫자
    num++;
    // 3. 개별숫자 반영하기
    ptxt.text(num);

    // [2] SVG 원 퍼센트 증가
    // 대상: .btns .c1
    btns.eq(seq).find('.c1')
    .css({
        strokeDashoffset: (300 * (100-num)/100)+'%'
    });

    // console.log((300 * (100-num)/100));

    /*
        수치계산법:
        전체값 * (100% - 현재 퍼센트)/100 = 원하는값

        -> 300에서부터 거꾸로 작아져야함!
        -> 퍼센트수치를 큰값에서 작은값으로 가도록함
        [ 100 - 현재 퍼센트 ]
    */

    // 999. 재귀호출하기 : 기준수보다 작을동안 타임아웃호출
    if(num < max){
        setTimeout(()=>{
            progFn(seq,max);
        }, 40);
    } ////// if ///////

} ///////////////////// progFn 함수 ////////////////

function prog2Fn(){

    let ptxt2 = lineper.find('.ltxt b');
    let num2 = ptxt2.text();
    console.log(num2);
    num2++;
    ptxt2.text(num2);

    lineper.find('.lbar').css({
        width: num2+'%'
    });

    if(num2 < 100){
        setTimeout(()=>{
            prog2Fn()
        }, 40);
    }

    // 4. 100% 도달 할 경우 음악 재생하기!
    if(num2 == 100){
        console.log('음악틀어!');
        $('#myaud')[0].play();

        // 비교 JS 코드 get() 안씀
        // document.querySelector('#myaud').play();
        // 이미 삽입된 이미지를 재생시킨다
        // 비디오/오디오 재생 메서드 :play()
        // 비디오/오디오 멈춤 메서드 :pause()
        // 비디오/오디오 요소는 제이쿼리에서
        // get() 메서드를 사용하여 선택함!
        // $(선택요소).get(0).play()
        // $(선택요소)[0].play()

    }    

}