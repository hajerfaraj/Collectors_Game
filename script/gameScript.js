
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
function load(){
	setTimeout(function() {$("#loader").hide();$("#loaderBg").hide();}, 1000);
}
function buildImage() {
	  index=Math.floor(Math.random() * 11) + 1;
	  var con=document.getElementById('content');
	  con.style.backgroundImage="url(images/backgrounds/bg"+index+".jpg)";
    }

//adds random furniture to room
function buildRoom(){
	var thing;
	index=Math.floor(Math.random() * 4) + 1;
	thing=document.getElementById("chan");
	thing.src="images/furniture/chan"+index+".png";

	index=Math.floor(Math.random() * 5) + 1;
	thing=document.getElementById("mid");
	thing.src="images/furniture/tab"+index+".png";

	index=Math.floor(Math.random() * 6) + 1;
	thing=document.getElementById("addL");
	thing.src="images/furniture/add"+index+".png";

	index=Math.floor(Math.random() * 6) + 1;
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
	    for (var i=0;i<5;i++){
			index=Math.floor(Math.random() * itemArr.length) + 0;
			list=ul.getElementsByTagName('li');
			for (var j=0;j<list.length; j++){
				if (list[j].innerText==itemArr[index]){
					index=Math.floor(Math.random() * itemArr.length); 
					j=-1;
				}
			}
		//random position 
		//TODO no overlap
			ranY=Math.floor(Math.random() * 95) + 0;
			ranX=Math.floor(Math.random() * 95) + 0;
		//randomly selects between two sets of items
			if (Math.random() >= 0.5)
				img.src="images/items/item_"+itemArr[index]+".png";
			else
				img.src="images/items/item_"+itemArr[index]+"2.png";
		//style and add selected image (with random coordinates)
			s=resizeItem();
			img.style="position:absolute; top:"+ranX+"%; left:"+ranY+"%; height:"+s+ "px;width:"+s
				 +"px;transform: rotate("+rotateItem()+"deg); z-index:7;";
			if (i<3)
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
	var index=Math.floor(Math.random() * rotVal.length);
	return rotVal[index];
	}
function resizeItem(){
	var sizeVal=[80,90,100,100,110,125,135,145];
	var index=Math.floor(Math.random() * sizeVal.length);
	return sizeVal[index];
	}

