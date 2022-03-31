// 1게임 생성

// 클릭할 대상

const make1num = document.querySelector("#make_num1")
const make5num = document.querySelector("#make_num5")
// const=상수 : 한번 값을 넣으면 수정이 안됨.
// var vs let : old vs new : 변수 : 나중에 값을 바꿀 수 있음


make1num.addEventListener("click", show1num);
make5num.addEventListener("click", show5num);

function show1num(){
    let num_one = [];
    for(let i=1;i<46;i++){ // 1~45 만든다.
        num_one.push(i);
    }
   num_one.sort(function(){ //섞는다
        return Math.random() - 0.5
    });
    // console.log(num_one); //확인한다.
    // 추출 .slice() vs .splice()

    let start = Math.ceil(Math.random()*40); // 정수로 시작점
    let new_num_one = num_one.slice(start,start+6);
    new_num_one.sort(function(a,b){ // 오름차순정리
        return a-b;
    });
    // let bonus_num = new_num_one[new_num_one.length-1]
    localStorage.setItem("lotto_num",  new_num_one)
    // localStorage.setItem("bonus",  bonus_num)

    // return new_num_one
    location.href = "/result1"

    // let bonus_num = new_num_one[new_num_one.length-1]
    // console.log('보너스 번호 : '+bonus_num);
    // 내일 진행
    // localStorage.setItem("game_one",new_num_one)
    // index 페이지 에서 만든 로또 번호들을 생성한 뒤의 화면으로 그대로 옮겨야 함
}

// let final_bonus_num = show1num();
// console.log("1game bonus number : "+final_bonus_num);

function show5num(){
    
}