//top_navbar
var as=document.querySelectorAll("[data-toggle=tab]");
for(var a of as){
    a.onmouseenter=function(){
        var divs=document.querySelectorAll("#container_1>div")
        for(var div of divs){
            div.style.display="none";
        }
        var id=this.getAttribute("data-target");
        document.querySelector(id).style.display="block";
    }
}

var tabs=document.getElementsByClassName("header_txt")[0];
tabs.onmouseleave=function(){
    var divs=document.querySelectorAll("#container_1>div");
    for(var div of divs){
        div.style.display="none";
    }
}

//site
var as=document.querySelectorAll("[data-toggle=tabs]");
for(var a of as){
    a.onmouseenter=function(){
        var divs=document.querySelectorAll("#container_2>div")
        for(var div of divs){
            div.style.display="none";
        }
        var id=this.getAttribute("data-target")
        document.querySelector(id).style.display="block";
    }
}
var tab=document.getElementsByClassName("site_navbar")[0];
tab.onmouseleave=function(){
    var divs=document.querySelectorAll("#container_2>div")
    for(var div of divs){
        div.style.display="none";
    }
}












