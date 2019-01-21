//allow game to be played
function play(){
    //remove play screen and disable mouse until timer starts
    var start=document.getElementById('startScreen');
    start.style="display:none";
    start=document.getElementById('startButton');
    start.style="display:none";
    $('body').css('pointer-events', 'none');
    timer(0,0);
    setTimeout(function() {$('body').css('pointer-events', 'auto');}, 1000);
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
    //update timer every 1 sec
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
//reset all variables and re-initiate game
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
    $('body').css('pointer-events', 'auto');
    $('.hint').css({"filter":"none","pointer-events": "auto"});
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
//display won screen, TODO: check if user is logged in
function won(){
    clearInterval(watch);
    wonDialogue();
    var timeText=document.getElementById("timerDisplay").innerHTML;
    var showTime=document.getElementById("totTime").innerHTML=timeText;
    $('body').css('pointer-events', 'none');
    $('#winDialogue').css('pointer-events', 'auto');
    $('#pauseBtn').css('pointer-events', 'none');
    $('#restartBtn').css('pointer-events', 'auto');
}
var onOff=true;
function pause(){
    var str;
    if (onOff){
        //disable mouse on all but buttons
        onOff=false;
        clearInterval(watch);
        $('body').css('pointer-events', 'none');
        $('#pauseBtn').css('pointer-events', 'auto');
        $('#restartBtn').css('pointer-events', 'auto');
    }
    else{
        //restore mouse and resume timer
        onOff=true;
        $('body').css('pointer-events', 'auto');
        str=document.getElementById('timerDisplay').innerHTML;
        timer(str[3]+str[4],str[0]+str[1]);
    }
}
var clicks=0;
// add 3 seconds to timer when click on off-list items every third click
function penalty(){
    if(clicks<2){
        clicks+=1;
    }
    else{
        clicks=0;
        clearInterval(watch);
        //flash red as warning
        $("#foreGround").css('background-color','rgba(255,0,0,0.3)');
        setTimeout(function() {$("#foreGround").css('background-color','rgba(0,0,0,0)');}, 30);
        var str=document.getElementById("timerDisplay").innerHTML;
        var seconds=parseInt(str[3]+str[4]);
        var minutes=parseInt(str[0]+str[1]);
        //increment timer by 3seconds
        seconds+=3;
        if (seconds >= 60) {
            seconds = 0;
             minutes++;
        }
        str=(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
         ":" + (seconds > 9 ? seconds : "0" + seconds);
        timer(str[3]+str[4],str[0]+str[1]);
    }
}
$(".hint").click(function(e){
    var name, liText;
    index=random(0,$('.item').length);
    //find random object and compare if it has been found (struck out)
    for (var j=0;j<$('li').length;j++){
        name=$( ".item:nth-child("+index+")" ).attr("src");
        liText=$( "li:nth-child("+(j+1)+")");
            if ( name.indexOf( liText.text() ) > -1 ) {  
                if ( liText.css("text-decoration")=="line-through" ) {
                   index=random(0,$('.item').length);
                   j=0; 
                }
                else{
                    break;
                }
            }  
    }
    //trigger found function and disable 1 hint
    $( ".item:nth-child("+index+")" ).trigger("click");
    $(e.target).css({"filter":"invert(30%)","pointer-events": "none"});
});