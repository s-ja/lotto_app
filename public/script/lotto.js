// 1게임 생성

// 클릭할 대상

var make1num = document.querySelector("#make_num1")

make1num.addEventListener("click", show1num);

function show1num(){
    var num_one = [];
    for(var i=1;i<46;i++){ // 1~45 만든다.
        num_one.push(i);
    }
   num_one.sort(function(){ //섞는다
        return Math.random() - 0.5
    });
    // console.log(num_one); //확인한다.
    // 추출 .slice() vs .splice()

    var start = Math.ceil(Math.random()*40); // 정수로 시작점
    var new_num_one = num_one.slice(start,start+6);
    console.log(new_num_one.sort(function(a,b){ // 오름차순정리
        return a-b;
    }));
    var bonus_num = new_num_one[new_num_one.length-1]
    console.log('보너스 번호 : '+bonus_num);
    // 내일 진행
    // localStorage.setItem("game_one",new_num_one)
    // index 페이지 에서 만든 로또 번호들을 생성한 뒤의 화면으로 그대로 옮겨야 함
     
}