const body = document.querySelector("body"); // 바디태그 불러오기

const IMG_NUMBER = 5; // 이미지갯수 정하기

/*
function handleImgLoad(){
    console.log("finished loading");
}
원격으로 일하면 이게 필요함
*/ 

function paintImage(imgNumber){ 
    const image = new Image(); //이미지 객체 생성
    image.src = `images/${imgNumber + 1}.jpg`; //이미지 파일 경로
    image.classList.add("bgImage");//이미지 객체에 클래스 추가
    body.appendChild(image);// 바디에 이미지 종속
    // image.addEventListener("loadend", handleImgLoad); > 
}


function genRandom(){ //랜덤넘버 생성함수 생성
    const number = Math.floor(Math.random() * IMG_NUMBER); //내림(랜덤으로*imgnumber만큼의 숫자 생성)
    console.log(number);
    return number; // 생성된 숫자 반환
}

function init () {
    const randomNumber = genRandom(); //랜덤넘버 생성함수 실행
    paintImage(randomNumber); //이미지 출력
}

init();

/*
math 함수
math.random
math.floor
math.ceil
*/