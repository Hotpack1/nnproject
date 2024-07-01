let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let correctArea = document.getElementById("correct-area");
let historyArea = document.getElementById("history-area");
let imgArea = document.querySelector("img");
let chances = 3;
let gameOver = false;
let correctAnswer = false;
let chanceArea = document.getElementById("chance-area");
let history = [];



playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value="";})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("correct",computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if(userValue<1||userValue>100){
        resultArea.textContent="1과100사이 숫자를 입력해 주세요";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        return;
    }
    chances--;
    
    if(userValue < computerNum){
        resultArea.textContent = "UP";
        imgArea.src = "https://mblogthumb-phinf.pstatic.net/20160704_80/james929_1467587830102rY83C_GIF/9YEJTUF.gif?type=w800";
        chanceArea.textContent=`남은 기회 : ${chances}번`;
    }
    else if(userValue > computerNum){
        resultArea.textContent = "DOWN";
        chanceArea.textContent=`남은 기회 : ${chances}번`;
        imgArea.src ="https://cdnweb01.wikitree.co.kr/webdata/editor/201401/16/img_20140116090203_487d5366.gif";

    }
    else{
        correct();
        
    }
    history.push(userValue);
    historyArea.textContent=`시도한 숫자들 : ${history}`;
    
    
    
    

    

    if(chances <1){
        gameOver=true;

    }
    if(gameOver == true&&correctAnswer == false){
        playButton.disabled = true;
        resultArea.textContent=`기회를 모두 소진하였습니다. 리셋 버튼을 눌러 다시 도전하세요`
        imgArea.src = "https://cdn.imweb.me/thumbnail/20220604/1f2e8cb1f509c.gif";
    }
  
}

function reset(){
    
    userInput.value = "";
    pickRandomNum();
    

    resultArea.textContent="결과값이 여기 나옵니다."
    chances =3;
    history = [];
    correctAnswer=false;
    gameOver=false;
    playButton.disabled=false;
    chanceArea.textContent=`남은 기회 : ${chances}번`;
    correctArea.textContent=`정답 : ${computerNum}`;
    historyArea.textContent=`시도한 숫자들 : ${history}`;
    imgArea.src = "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998AC4355DF6781B03";
    
}

function correct(){
    chanceArea.textContent=`남은 기회 : ${chances}번`;
    correctAnswer=true;
    gameOver=true;
    playButton.disabled = true;
    
   
    if(chances ==2){
        imgArea.src= "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F990D67455FCBB0CB37";
    }
    else if(chances ==1){
        imgArea.src = "https://2runzzal.com/media/djEwRWJrVldhSklDVGp4WW4xZU1lZz09/zzal.gif";
    }
    else if(chances ==0){
        imgArea.src = "https://2runzzal.com/media/VTlsSjBUMTZrMk5HMVovOXJlNTFNQT09/zzal.gif";
    }
    
    resultArea.textContent = "CORRECT";
    
}

pickRandomNum();
correctArea.textContent=`정답 : ${computerNum}`;
historyArea.textContent=`시도한 숫자들 : ${history}`;
