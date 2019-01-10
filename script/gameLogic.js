//called when image is clicked to hide img WIP
function found(item){
    
    var  name=item.src;
    var ul=document.getElementById('itemList');
    var list=ul.getElementsByTagName('li');
		for (var j=0;j<list.length; j++){
            if ( name.indexOf( list[j].innerText ) > -1 ) {
                alert("Found");
                list[j].style="text-decoration: line-through;filter: contrast(100%) brightness(100%)!important;";
                break;
            } 
        }item.style="Display:none;";
}
function timer(){
//TODO timer 
}
function restartButton(){
//TODO
}
function winCheck(){
//TODO
}
function won(){
//TODO
}