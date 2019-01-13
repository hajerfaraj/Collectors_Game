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
    var seconds = sec, minutes = min; 
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
    var ul=document.getElementById('itemList'), stuff=document.getElementById('stuff'),
        camo=document.getElementById('camo');
    while( ul.hasChildNodes() ){
            ul.removeChild(ul.lastChild);
    }
    while( stuff.hasChildNodes() ){
        stuff.removeChild(stuff.lastChild);
    }
    while( camo.hasChildNodes() ){
        camo.removeChild(camo.lastChild);
    }
    document.getElementById('timerDisplay').innerHTML="00:00";
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
}
//TODO 
function pause(){
    var onOff=true;
    
}