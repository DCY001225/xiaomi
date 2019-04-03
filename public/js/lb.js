
var box=document.querySelector(".carousel_inner");
var arrow=document.querySelector(".carousel_arrow");
var PrNe=arrow.children[0].children;
var imgwidth=box.offsetWidth;
var ul=box.children[0];
var ulNewList=ul.children[0].cloneNode(true);
ul.appendChild(ulNewList);
var ol=box.children[2].firstElementChild;
for(var i=0;i<ul.children.length-1;i++){
    var olNewList=document.createElement("li");
    ol.appendChild(olNewList);
}
var olList=ol.children;
for(var olLists of olList){
    olList.className="";
}
olList[0].className="active";
for(var i=0;i<olList.length;i++){
    olList[i].index=i;
    olList[i].onmouseenter=function(){
        for(var i=0;i<olList.length;i++){
            olList[i].className="";
        }
        this.className="active";
        imgIndex=squareIndex=this.index;
        translateAnimate(ul,-this.index*imgwidth,10);
    }
}
var timer=setInterval(autoPlay,3000);
var imgIndex=0; var squareIndex=0;
function autoPlay(){
    imgIndex++; squareIndex++;
    if(squareIndex>olList.length-1){
        squareIndex=0;
    }
    if(imgIndex>olList.length){
        ul.style.left=0;
        imgIndex=1;
    }
    translateAnimate(ul,-imgIndex*imgwidth,10);
    for(var i=0;i<olList.length;i++){
        olList[i].className="";
    }
    olList[squareIndex].className="active";
}
box.onmouseenter=function(){
    clearInterval(timer);
    arrow.style.display="block";
}
box.onmouseleave=function(){
    timer=setInterval(autoPlay,3000);
    arrow.style.display="none";
}
PrNe[1].onclick=function(){
    autoPlay();
}
PrNe[0].onclick=function(){
    imgIndex--; squareIndex--;
    if(squareIndex<0){
        squareIndex=olList.length-1;
    }
    if(imgIndex<0){
        ul.style.left=-olList.length*imgwidth+"px";//ul.style.left=-(ul.children.length-1)*imgwidth+"px";
        imgIndex=olList.length-1;//imgIndex=(ul.children.length-1)-1;
    }
    translateAnimate(ul,-imgIndex*imgwidth,10);
    for(var i=0;i<olList.length;i++){
        olList[i].className="";
    }
    olList[squareIndex].className="active";
}
function translateAnimate(ele,end,speed){
    clearInterval(ele.timer);
    var s;
    if(ele.offsetLeft<end){s=speed;}
    else if(ele.offsetLeft>end){s=-speed;}
    else{s=0;}
    ele.timer=setInterval(function(){
        var endval=end-ele.offsetLeft;
        ele.style.left=ele.offsetLeft+s+"px";
        if(Math.abs(endval)<=Math.abs(speed)){
            ele.style.left=end+"px";
            clearInterval(ele.timer);
        }
    },1)
}
