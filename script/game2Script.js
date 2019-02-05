//generate stage
function init(){
    buildImage();
	antiItems();
	$(document).ready(function(){
		$(window).load(load());
	});
}
function buildImage() {
	  index= random(1,11);
	  var con=document.getElementById('content');
      con.style.backgroundImage="url(images/backgrounds/bg"+index+".jpg)";
}
//tie cursor to basket
$(document).ready(function(){
    $(document).mousemove(function(e){
        /*$("#content").css('cursor', 'none');*/
        $("#basket").css({left:e.pageX});
    });
});
//animate ripple effect where mouse clicked
$('body').append($('<span class="ripple"></span>'));
$("#content").on('click', function(e){
  var xPos = e.clientX,
      yPos = e.clientY;
  $('.ripple').css({
    top: yPos-2,
    left: xPos-2
  }).addClass('active');
});
//remove after animation finished
$(".ripple").on('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', 
function() {
 $('.ripple').removeClass('active');
}); 
var speed;
function buildItems() {
		var img= $("<img />"), s;
		// Add image source
		index=random(0, itemArr.length);
		if (Math.random() >= 0.5)
			img.attr("src","images/items/item_"+itemArr[index]+".png" );
		else
			img.attr("src","images/items/item_"+itemArr[index]+"2.png" );

  		// Add item to the screen
  		$("#stuff").append(img);
 		 // Generate random number for x position
		var xPos = random(0, $("#stuff").width());
		img.css("top", "-100px");
		s=resizeItem();
		img.css({"height": s+ "px", "width":s +"px","transform": "rotate("
			+rotateItem()+"deg)", "z-index":"7"});
		img.css("left", xPos + "px");
    	// Get random animation interval
		speed = random(5000, 7000);
		img.addClass("item");
		// Start animation
		
   		img.animate({"top": "430px"}, speed, "linear", function(){posCheck(this)});

}
function antiItems(){
	//create and add items to be avoided 
	var ul=document.getElementById('itemList'),
    img=document.createElement('img'),
	li, name, list;
	//no repeat
    for (var i=0;i<3;i++){
			index=random(0, itemArr.length);
			list=ul.getElementsByTagName('li');
			for (var j=0;j<list.length; j++){
				if (list[j].innerText.trim()==itemArr[index]){
					index=random(0, itemArr.length); 
					j=-1;
				}
            }
    if (Math.random() >= 0.5)
				img.src="images/items/item_"+itemArr[index]+".png";
			else
				img.src="images/items/item_"+itemArr[index]+"2.png";
    //add anti-item to item pane
    var node=img.cloneNode(),
	li=document.createElement('li');
	img.style="filter:contrast(100%) brightness(100%)!important;";
	$(img).addClass(".red");
	$(img).toggle('.red');
	li.appendChild(img);
	name=document.createElement('text');
	name.innerHTML="<br/>"+itemArr[index];
	li.appendChild(name);
	node=li.cloneNode(li);
	ul.appendChild(node);
	}

}
var watch;
function timer(sec, min){
    var seconds = parseInt(sec), minutes = parseInt(min); 
    
    var timerText=document.getElementById("timerDisplay");
    watch= setInterval(function(){
        seconds--;
        if (seconds >= 60) {
            seconds = 0;
             minutes--;
        }
        timerText.innerHTML=(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
         ":" + (seconds > 9 ? seconds : "0" + seconds);
            if((seconds==0)&&(minutes==0)){
                clearInterval(watch);
                alert("hi");
				wonDialogue();
				$('.item').stop(true,false);
			}
    }, 1000);  
}