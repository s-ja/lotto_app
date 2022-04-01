// 자바스크립트 변수 : var vs const,let(=상수) (상수 = 바뀌지 않는 수)(변수 = 바뀌는 수, 다만 하나만 담을 수 있음)
// old // new 의 차이점
// var 는 선언하지 않아도 사용이 가능, 전역과 지역이 명확하지 않음

// 사이드 메뉴 열기

// 대상 : id요소 카멜 케이스, class 요소 케밥 케이스 / 자바스크립트는 언더바를 선호하긴 함(?)
const open_btn = document.querySelector("#open_side")
const close_btn = document.querySelector("#close_side")
const side_pan = document.querySelector("#side_pannel")

// 이벤트 등록
open_btn.addEventListener("click",side_open)
close_btn.addEventListener("click",side_close)

// 함수
function side_open(){
    side_pan.classList.remove("d_none")
}

function side_close(){
    side_pan.classList.add("d_none")
}

const toggle_btn = document.querySelector("#blind")
toggle_btn.addEventListener("click", handle_click)

let btn_status = "lock"

function handle_click(e){
    if(e.target.className == btn_status){
        console.log("잠금을 해제합니다.");
        unlock("해제");
    }else{
        console.log("잠금합니다.");
         lock("잠금");
    }
}

function unlock(message){
    toggle_btn.className = "unlock";
    toggle_btn.textContent= message
}

function lock(message){
     toggle_btn.className = "lock";
     toggle_btn.textContent = message
}