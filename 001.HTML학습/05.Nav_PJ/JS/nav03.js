// 네비 유형3 JS - nav03.js

// DOM 모듈 JS 불러오기
import dFn from './dom.js';

// console.log(dFn);

// 1. 요구사항분석 : 이미지가 있는 메뉴에 마우스 오버시 이미지 변경하기
// 2. 대상선정 : a .simg
const simg = dFn.qsa('.simg');
// console.log(simg);

// 3. 이벤트 설정
simg.forEach(ele=>{
    dFn.addEvt(ele, 'mouseover',()=>{
        // 1. 대상: a요소 하위 두번째 이미지
        let target = dFn.qsaEl(ele,'img')[1];
        console.log(dFn.qsaEl(ele, 'img')[0]);
        console.log(dFn.qsaEl(ele, 'img')[1]);
        // 2. 하위 이미지 src 읽어오기
        let isrc = target.src;
        // console.log(isrc);
        // 3. 기존 이미지 src의 .png를 _on.png로 replace하기 ! ! !
        target.src = isrc.replace('.png', '_on.png');
        // 4. 글자색 빨간색
        ele.style.color = 'red';
    });
    dFn.addEvt(ele, 'mouseout',()=>{
        console.log('마우스 아웃!!!!!');
        // 1. 대상: a요소 하위 두번째 이미지
        let target = dFn.qsaEl(ele,'img')[1];
        // 2. 하위 이미지 src 읽어오기
        let isrc = target.src;
        // console.log(isrc);
        // 3. 기존 이미지 src의 .png를 _on.png로 replace하기 ! ! !
        target.src = isrc.replace('_on.png', '.png');
        // 4. 글자색 스타일 지우기
        ele.style.cssText = '';
    });
}); //////////////////////// forEach ////////////////////////

