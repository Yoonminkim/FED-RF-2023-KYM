// 보그 PJ - 공통 모듈 JS

// 상단, 하단 공통 데이터 불러오기

import dFn from './dom.js';
import tData from './data/com_module.js';

console.log(tData);

// 대상선정: .top-area, .footer-area
const commA = dFn.qsa('.common-area');

// 상단영역 html 넣기
commA[0].innerHTML = tData.topArea;
// 하단영역 html 넣기
commA[1].innerHTML = tData.footerArea;

