//declaration.
let choices=document.querySelectorAll(".choice");

let cro=document.getElementById('cro');
let cpa=document.getElementById('cpa');
let csc=document.getElementById('csc');
let cp=document.getElementById('cp');
let up=document.getElementById('up');
let loff=document.getElementById('loff');
let l10=document.getElementById('l10');
let l20=document.getElementById('l20');
let l30=document.getElementById('l30');
let reset=document.getElementById('reset');
let endr=document.getElementById('endr');
let result=document.getElementById('result');
let level;
let userchoice;
let compchoice;
let finalresult;
let userpoint=0;
let comppoint=0;
let clickaudio =new Audio();
clickaudio.src='click.mp3';
let winaudio =new Audio();
winaudio.src='win.mp3';
let loseaudio =new Audio();
loseaudio.src='lose.mp3';



//Target.
choices.forEach((choice)=>{
choice.addEventListener("click",()=>
{
userchoice=choice.getAttribute("id");
compchoice=compchoicefun();
finalresult=cheak(userchoice,compchoice);
logic(finalresult);
cro.style.background="none";
cpa.style.background="none";
csc.style.background="none";
showcompfun();
levelfun();
clickaudio.play();
})})
loff.addEventListener("click",()=>{
  resetfun();
  loff.style.background="#35B991"
  l10.style.background="white";
  l20.style.background="white";
  l30.style.background="white";
  level=100000000000000; 
  });
l10.addEventListener("click",()=>{
  resetfun()
  l10.style.background="#35B991"
  loff.style.background="white";
  l20.style.background="white";
  l30.style.background="white";
  level=10;
});
l20.addEventListener("click",()=>{
  resetfun();
  l20.style.background = "#35B991"
  l10.style.background = "white";
  loff.style.background = "white";
  l30.style.background = "white";
  level=20;
});
l30.addEventListener("click",()=>{
  resetfun();
  l30.style.background = "#35B991"
  l10.style.background = "white";
  l20.style.background = "white";
  loff.style.background = "white";
  level=30;
});
reset.addEventListener("click",()=>{
  resetfun();
});


//functions.

function compchoicefun() {
let arr=["rock","paper","scissors"];
let compc=Math.floor(Math.random()*3);
 return arr[compc];
}
function cheak(userchoice,compchoice) {
  
  if (userchoice==compchoice) {
    return "😐 Draw 😐";
  }
 else if(userchoice=="rock"&&compchoice=="scissors"){
    return true;
  }
 else if(userchoice=="paper"&&compchoice=="rock"){
   return true;
}
 else if(userchoice=="scissors"&&compchoice=="paper") {
   return true;
 }
 else{
   return false;
 }
}
function logic(finalresult) {
if (finalresult==true) {
  result.innerHTML="😀 YOU WIN😀";
  userpoint++;
  up.innerHTML=userpoint;
  
}
else if (finalresult==false) {
  result.innerHTML="😔 YOU LOSE 😔";
  comppoint++;
  cp.innerHTML=comppoint;
}
else {
  result.innerHTML=finalresult;
}
}
function showcompfun() {
  if (compchoice=="rock") {
   cro.style.background="black";
  }
  else if (compchoice=="paper") {
   cpa.style.background="black";
  }
  else if(compchoice=="scissors"){
  csc.style.background="black";
  }
}
function resetfun() {
  cro.style.background="none";
  cpa.style.background="none";
  csc.style.background="none";
  userpoint=0;
  comppoint=0;
  cp.innerHTML=0;
  up.innerHTML=0;
  result.innerHTML="Choose To Play";
  endr.style.display="none";
  reset.style.boxShadow="none";
  reset.style.border=".3vw solid black";
  reset.style.color="black&& ";
  clickaudio.play();
  reset.classList.remove("resetactive");
}
function levelfun() {
  if(userpoint==level&&level==10||comppoint==level&&level==10)
  {
   reset.classList.add("resetactive");
    if(userpoint>comppoint) {
     endr.innerHTML="🎉 YOU WIN 🎉"
     endr.style.display="block";
     winaudio.play();
    }
   else {
     endr.innerHTML="😭 YOU LOSE 😭";
     endr.style.display="block"
     loseaudio.play();
   }
  }
 else if(userpoint==level&&level==20||comppoint==level&&level==20)
  {
    reset.classList.add("resetactive");
   if(userpoint>comppoint) {
     endr.innerHTML="🎉 YOU WIN 🎉";
     endr.style.display="block";
     winaudio.play();
    }
   else {
     endr.innerHTML="😭 YOU LOSE 😭";
     endr.style.display="block";
     loseaudio.play();
   }
   
  }
 else if(userpoint==level&&level==30||comppoint==level&&level==30)
  {
  reset.classList.add("resetactive");
   if (userpoint > comppoint) {
     endr.innerHTML="🎉 YOU WIN 🎉";
     endr.style.display = "block";
     winaudio.play();
   }
   else {
     endr.innerHTML = "😭 YOU LOSE 😭";
     endr.style.display = "block";
     loseaudio.play;
   }
  }
  
}

