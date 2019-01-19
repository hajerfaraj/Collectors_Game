
var index = 0;
//items to be displayed
var itemArr=['cat','hat','cup','ball','bag','dice','flower','icecream','phone','radio','money','mask',
			'plant','elephant','teddy','glasses','car','fish','ring','watch','key','statue','camera','ship',
			'bowl','pillow','trunk','paper','book','picture','crown','lamp','vase','helmet','candle','jewel'];

//generate random background on startup
function init(){
	buildImage();
	buildRoom();
	buildItems();
	$(document).ready(function(){
		$(window).load(load());
	});
}
//shorhand version to be reused throughout
function random(min,max){
 	return Math.floor(Math.random() * (max-min) + min);
}
function load(){
	setTimeout(function() {$("#loader").hide();$("#loaderBg").hide();}, 1000);
}
function buildImage() {
	  index= random(1,11);
	  var con=document.getElementById('content');
	  con.style.backgroundImage="url(images/backgrounds/bg"+index+".jpg)";
    }

//adds random furniture to room
function buildRoom(){
	var thing;
	index= random(1,4);
	thing=document.getElementById("chan");
	thing.src="images/furniture/chan"+index+".png";

	index= random(1,5);
	thing=document.getElementById("mid");
	thing.src="images/furniture/tab"+index+".png";

	index= random(1,6);
	thing=document.getElementById("addL");
	thing.src="images/furniture/add"+index+".png";

	index= random(1,6);
	thing=document.getElementById("addR");
	thing.src="images/furniture/add"+index+".png";
}

//adds random items to be found
function buildItems() {
		var con=document.getElementById('stuff'),
		img=document.createElement('img'),
		ul=document.getElementById('itemList'),
		li, node, name, list,s;
		//no repeat random item
	    for (var i=0;i<25;i++){
			index= random(0,itemArr.length);
			list=ul.getElementsByTagName('li');
			for (var j=0;j<list.length; j++){
				if (list[j].innerText==itemArr[index]){
					index=random(0, itemArr.length); 
					j=-1;
				}
			}
		//random position 
		//TODO no overlap
			ranY= random(0,95);
			ranX=random(0,95);
		//randomly selects between two sets of items
			if (Math.random() >= 0.5)
				img.src="images/items/item_"+itemArr[index]+".png";
			else
				img.src="images/items/item_"+itemArr[index]+"2.png";
		//style and add selected image (with random coordinates)
			s=resizeItem();
			img.style="position:absolute; top:"+ranX+"%; left:"+ranY+"%; height:"+s+ "px;width:"+s
				 +"px;transform: rotate("+rotateItem()+"deg); z-index:7;";
			if (i<10)
				 createItems(img);
			else
		 	 	camoItems(img);
	  	};

	}
function createItems(img){
	//add main item 
	var node=img.cloneNode(),
	con=document.getElementById('stuff'),
	ul=document.getElementById('itemList'),
	li, name;
	node.addEventListener("click", function(){found(this)}, false);
	con.appendChild(node);
	//add item shadow to item pane
	li=document.createElement('li');
	img.style="";
	li.appendChild(img);
	name=document.createElement('text');
	name.innerHTML=itemArr[index];
	li.appendChild(name);
	node=li.cloneNode(li);
	ul.appendChild(node);

}
function camoItems(img){
	//add secondary item
	var node=img.cloneNode(),
	con=document.getElementById('stuff');
	node.style.zIndex="6";
	node.addEventListener("click",penalty,false);
	con.appendChild(node);
}
function rotateItem(){
	var rotVal=[0,0,0,45,90,135,180,225,270];
	var index=random(0, rotVal.length);
	return rotVal[index];
	}
function resizeItem(){
	var sizeVal=[80,90,100,100,110,125,135,145];
	var index=random(0, sizeVal.length);
	return sizeVal[index];
	}

