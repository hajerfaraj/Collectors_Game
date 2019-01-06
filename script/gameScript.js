
var index = 0;
//items to be displayed
var itemArr=['cat', 'hat', 'cup', 'ball', 'bag', 'dice', 'flower',  'icecream',
				'elephant', 'teddy', 'glasses', 'car'];

//generate random background on startup
function buildImage() {
	  index=Math.floor(Math.random() * 11) + 1;
	  var con=document.getElementById('content');
	  con.style.backgroundImage="url(images/backgrounds/bg"+index+".jpg)";
	  buildRoom();
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
	buildItems();
}

//adds random items to be found
function buildItems() {
		var con=document.getElementById('stuff');
		var img=document.createElement('img');
		var ul=document.getElementById('itemList');
		var li;
		var node;
		var name;
	  for (var i=0;i<5;i++){
		index=Math.floor(Math.random() * itemArr.length) + 0; 
		//random position 
		ranY=Math.floor(Math.random() * 95) + 0;
		ranX=Math.floor(Math.random() * 95) + 0;
		//randomly selects between two sets of items
		if (Math.random() >= 0.5)
			img.src="images/items/item_"+itemArr[index]+".png";
		else
			img.src="images/items/item_"+itemArr[index]+"2.png";
		//TODO prevent same item from appearing twice
		//style and add selected image (with random coordinates)
		img.style="position:absolute; top:"+ranX+"%; left:"+ranY+"%; height:100px; width:100px; display:block;";
		node=img.cloneNode();
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
	  };

	}
	
function rotateItem(){
	//TODO: item rotation
}
