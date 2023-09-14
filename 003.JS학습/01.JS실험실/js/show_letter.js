// 글자등장1 JS - show_letter.js











const myText = '무궁화꽃이피었습니다';


for(let x of myText){

    if(x==' ')
        hcode += '&nbsp;&nbsp;';
    else
        hcode += `<span style="transition-delay: ${seqNum*0.2}s;"${x}</span>`;

    seqNum++;
}

// 5. 스테이지박스에 코드 출력하기

stage.innerHTML = hcode;


// 6. 일정시간뒤 등장클래스 .on주기
setTimeout(()=>{
    stage.classList.add('on');
},2000);