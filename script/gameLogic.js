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
function timer(){
//TODO timer 
}
function restartButton(){
//TODO
}
function winCheck(){
    var ul=document.getElementById('itemList');
    var list=ul.getElementsByTagName('li');
//loop through item list, comparing if struck out (found)  
    for (var j=0;j<list.length;j++){
            if ( list[j].style.textDecoration!="line-through" ) {
                break;
            }
            else{
                if(j==list.length-1)
                    won();
            }     
        }
}
//TODO
function won(){
    alert("won");
}