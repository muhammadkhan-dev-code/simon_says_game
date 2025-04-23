 let game_seq=[];
 let user_seq=[];
 let started = false;
 let level=0;
 let user_color;
 let button_color=["green","red","yellow","blue"];
 let gameOver = false;

 let start_btn= document.querySelector("#start_btn");
 let h2= document.querySelector("h2");



 function startGame(){
   if(!started){
      console.log("Start button was clicked or Enter key pressed...");
        started=true;
      
        alert("Game started st");
        levelUp();
   }
 }
 start_btn.addEventListener("click",startGame);
 document.addEventListener("keypress",function(e){
   if(e.key==="Enter"){
      if(!started){
         startGame();
      }
   }
   else{
      alert("Another key was pressed !");
   }  
});

 function game_Flash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },500) ;
};


function user_flash(btn){
   btn.classList.add("userColor");
   setTimeout(function(){
      btn.classList.remove("userColor");
   },500);
};

function levelUp(){
   user_seq=[];//  user sequence reset

   level++;
h2.innerText=`Level ${level}`;
// choose random button
let random_index =  Math.floor(Math.random()*3);// choose random index between 0-3
let randomColor=button_color[random_index];
let random_btn= document.querySelector(`.${randomColor}`);// select className
// console.log(random_index); console.log(randomColor); console.log(random_btn);
game_seq.push(randomColor);
console.log(game_seq);
game_Flash(random_btn);
}

function chech_ans(index){

   if(user_seq[index]===game_seq[index]){
     if(user_seq.length==game_seq.length){
      setTimeout(levelUp,1000);
     }
   } else{
      h2.innerHTML = `Game Over <br> Your Score: <b>${level}</b> & Press Enter or Start Button to restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout( function(){
         document.querySelector("body").style.backgroundColor="rgba(32, 32, 207, 0.507)";
       },300)
    reset_To();         
   }

}
function user_btn_press(){
let select_btn= this;
user_flash(select_btn);
user_color=select_btn.getAttribute("id");
user_seq.push(user_color);

chech_ans(user_seq.length-1);



}


let all_btns= document.querySelectorAll(".btn");
 for(btn of all_btns){
   btn.addEventListener("click",user_btn_press);

 }


 function reset_To(){
   started=false;
   game_seq=[];
   user_seq=[];
   level=0;



 }
