//allow game to be played
function play(){
    $(".start").css("display","none");
    $(".start").css("display","none");
    $('body').css('pointer-events', 'none');
    timer(10,0);
    setTimeout(function() {$('body').css('pointer-events', 'auto');}, 1000);
    fallItems();
}
function fallItems(){
    var num = 5;
  while (num > 0) {
    buildItems();
    num--; }
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
    document.getElementById('timerDisplay').innerHTML="01:00";
    document.getElementById("winDialogue").style.display="none";
    $('body').css('pointer-events', 'auto');
    clearInterval(watch);
    timer(60,0);
    init();
    //fallItems();
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
        $('.item').stop(true,false);
    }
    else{
        //restore mouse and resume timer
        onOff=true;
        $('body').css('pointer-events', 'auto');
        str=document.getElementById('timerDisplay').innerHTML;
        timer(str[3]+str[4],str[0]+str[1]);
        $('.item').animate({"top": "430px"}, speed, "swing", buildItems);
    }
}

function posCheck(){

    if($(".item").css("bottom")<"25%"){
       alert("rock bottom");
    }
}