//allow game to be played
function play(){
    var start=document.getElementById('startScreen');
    start.style="display:none";
    start=document.getElementById('startButton');
    start.style="display:none";
    $('body').css('pointer-events', 'none');
    timer(10,0);
    setTimeout(function() {$('body').css('pointer-events', 'auto');}, 1000);
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
}