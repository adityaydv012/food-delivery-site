let menu=document.getElementById("menu");
menu.style.maxHeight=="0px";
function toggleMenu(){
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "500px";
    }
    else{
        menu.style.maxHeight = "0px";
    }

}


