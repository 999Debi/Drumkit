var m=document.querySelectorAll(".drum").length;
for(var i=0;i<m;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      makesound(this.innerHTML);
      buttonanimation(this.innerHTML);

    });
 }

//for keyboard
 document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
 });

  function makesound(key){
    switch( key){
      case "w":
       var tom1=new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;

       case "a":
       var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;

       case "s":
       var tom3=new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;

       case "d":
       var tom4=new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;

       case "j":
       var snare=new Audio("sounds/snare.mp3");
       snare.play();
       break;

       case "k":
       var cras=new Audio("sounds/crash.mp3");
       cras.play();
       break;

       case "l":
       var kick=new Audio("sounds/kick-bass.mp3");
       kick.play();
       break;

       
}
  }

  function buttonanimation(crkey){
     var activebtn= document.querySelector("."+crkey);
     activebtn.classList.add("pressed");
     setTimeout(function(){
      activebtn.classList.remove("pressed");
     },100);
  }