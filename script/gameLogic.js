function play(){
    var start=document.getElementById('startScreen');
    start.style="display:none";
    start=document.getElementById('startButton');
    start.style="display:none";
    timer(0,0);
}
//called when image is clicked to hide img WIP
function found(item){
    var  name=item.src;
    var ul=document.getElementById('itemList');
    var list=ul.getElementsByTagName('li');
    //remove name from list, and show img
		for (var j=0;j<list.length; j++){
            if ( name.indexOf( list[j].innerText ) > -1 ) {
                list[j].style="text-decoration: line-through;";
                list[j].firstChild.style="filter: contrast(100%) brightness(100%)!important;";
                break;
            } 
        }
    //animate found item
        item.style="";
        item.classList.toggle("wonItem");
        var timeOut = setTimeout(function() {
          item.style="Display:none;"; 
        }, 1000);
        timeOut = setTimeout(function() {
          winCheck();
        }, 1300);
        
}
var watch;
function timer(sec, min){
    var seconds = parseInt(sec), minutes = parseInt(min); 
    var timerText=document.getElementById("timerDisplay");
    watch= setInterval(function(){
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
             minutes++;
        }
        timerText.innerHTML=(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
         ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);
}
function restartButton(){
    var ul=document.getElementById('itemList'), stuff=document.getElementById('stuff');
    while( ul.hasChildNodes() ){
            ul.removeChild(ul.lastChild);
    }
    while( stuff.hasChildNodes() ){
        stuff.removeChild(stuff.lastChild);
    }
    clicks=0;onOff=true;
    document.getElementById('timerDisplay').innerHTML="00:00";
    document.getElementById("winDialogue").style.display="none";
    clearInterval(watch);
    timer(0,0);
    init();
}
function winCheck(){
    var ul=document.getElementById('itemList');
    var list=ul.getElementsByTagName('li');
//loop through item list, comparing if struck out (found)  
    for (var j=0;j<list.length;j++){
            if ( list[j].style.textDecoration!="line-through" ) {
                break;
            }
            else if(j==list.length-1){
                won();
            }     
        }
}
//TODO
function won(){
    clearInterval(watch);
    alert("won");
    //document.getElementsByClassName(".popup")[0].style.display="block";
    wonDialogue();
    var timeText=document.getElementById("timerDisplay").innerHTML;alert(timeText);
    var showTime=document.getElementById("totTime").innerHTML=timeText;
}
//TODO 
var onOff=true;
//$("#content").focusin(onOff=true,pause());
//$("#content").focusout(onOff=false,pause());
function pause(){
    var str;
    //alert(onOff);
    if (onOff){
        onOff=false;
        clearInterval(watch);
    }
    else{
        onOff=true;
        str=document.getElementById('timerDisplay').innerHTML;
        timer(str[3]+str[4],str[0]+str[1]);
    }
}
var clicks=0;
function penalty(){
    if(clicks<2){
        clicks+=1;
        alert(clicks);
    }
    else{
        alert('warning');
        clicks=0;
    }
}