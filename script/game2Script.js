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
function buildRoom() {}
function buildItems() {}
$(document).ready(function(){
    $(document).mousemove(function(e){
        $("#content").css('cursor', 'none');
        $("#basket").css({left:e.pageX});
    });
});
$('body').append($('<span class="ripple"></span>'));
$("#content").on('click', function(e){
  var xPos = e.clientX,
      yPos = e.clientY;
  $('.ripple').css({
    top: yPos-30,
    left: xPos-30
  }).addClass('active');
});
$(".ripple").on('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', 
function() {
 $('.ripple').removeClass('active');
}); 
function buildItems() {
		var img= $("<img />")  ,s;
		
			
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
  		img.css("left", xPos + "px");
		img.css("top", "-100px");
		s=resizeItem();
		img.css({"position":"absolute",  "height": s+ "px", "width":s
				 +"px","transform": "rotate("+rotateItem()+"deg)", "z-index":"7"});
    	// Get random animation interval
    	var speed = random(5000, 10000);
    	// Start animation
   		img.animate({"top": "430px"}, speed, "swing", buildItems);

}
function antiItems(){
	//add main item 
	var ul=document.getElementById('itemList'),
    img=document.createElement('img'),
    li, name, list;
    for (var i=0;i<3;i++){
			index=random(0, itemArr.length);
			list=ul.getElementsByTagName('li');
			for (var j=0;j<list.length; j++){
				if (list[j].innerText==itemArr[index]){
					index=random(0, itemArr.length); 
					j=-1;
				}
            }
    if (Math.random() >= 0.5)
				img.src="images/items/item_"+itemArr[index]+".png";
			else
				img.src="images/items/item_"+itemArr[index]+"2.png";
	//node.addEventListener("click", function(){found(this)}, false);
    //add item shadow to item pane
    var node=img.cloneNode(),
	li=document.createElement('li');
	img.style="filter:contrast(100%) brightness(100%)!important;";
	li.appendChild(img);
	name=document.createElement('text');
	name.innerHTML=itemArr[index];
	li.appendChild(name);
	node=li.cloneNode(li);
	ul.appendChild(node);
	}

}
function camoItems(img){
	//add secondary item
	var node=img.cloneNode(),
	con=document.getElementById('stuff');
	node.style.zIndex="6";
	node.addEventListener("click",penalty,false);
	con.appendChild(node);
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
                wonDialogue();}
    }, 1000);  
}