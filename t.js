let inp=document.querySelectorAll(".inputs");
let firstplay=document.querySelectorAll(".choose");
let pop = document.querySelector(".pop")
let rstrtpop = document.querySelector(".rstrtpop")
let rsltbtn = document.querySelector("#rsltbtn")
let result = document.querySelector("#result")
let state = "lose";
let turn="";
let wins=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
]
let restart=document.querySelectorAll(".restart");
restart.forEach(k=>{
k.addEventListener("click",()=>{
    window.location.reload();
})})

firstplay.forEach(button=>{
    button.addEventListener("click",(e)=>{
        for(let i=0;i<inp.length;i++){
            if(inp[i].textContent){
               result.textContent="You need to complete the game first";
               pop.classList.toggle("hidden");
               pop.classList.toggle("flex");
               return;
            }
        }
        turn=e.target.textContent;
        console.log(turn);
    })
})
inp.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.textContent){
            result.textContent="This is not vacant. Please choose another space.";
               pop.classList.toggle("hidden");
                pop.classList.toggle("flex");
        }
        else{
            if(turn==""){
                result.textContent="Please choose your first move's choice (Either 'O' or 'X' )";
               pop.classList.toggle("hidden");
                pop.classList.toggle("flex");
            }
            e.target.textContent=turn;
            if(turn=="O"){
                turn="X";
            }
            else if(turn=="X"){
                turn="O";
            }
            wins.forEach(y=>{
            if(inp[y[0]].textContent!=""){
            if((inp[y[0]].textContent===inp[y[1]].textContent) && (inp[y[0]].textContent===inp[y[2]].textContent)){
                state="win";
                result.textContent=`${inp[y[0]].textContent} Won. you wanna start a new game?`;
              pop.classList.toggle("hidden");
                pop.classList.toggle("flex");
                rstrtpop.classList.toggle("hidden");
        }
       }    
    })   
    if(state == "lose"){
        let count = 0;

for (let i = 0; i < inp.length; i++) {
    if (inp[i].textContent !== "") {
        count++;
    }
}

if (count === 9) {
    result.textContent="Game ended. DRAW. you wanna start a new game?";
              pop.classList.toggle("hidden");
                pop.classList.toggle("flex");
                rstrtpop.classList.toggle("hidden");
}
    }      
}

})
    })

    document.addEventListener("click",(e)=>{
        if(e.target.closest("#rsltbtn")){
             pop.classList.toggle("hidden");
                pop.classList.toggle("flex");
        }
    })

    
