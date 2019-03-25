//top_navbar
(function(){
    var as=document.querySelectorAll("[data-toggle=tab]");
    for(var a of as){
        a.onmouseenter=function(){
            var divs=document.querySelectorAll("#container_1>div")
            for(var div of divs){
                div.style.display="none";
            }
            var id=this.getAttribute("data-target");
            document.querySelector(id).style.display="block";
            //li bgcolor range

        }
        var tabs=document.getElementsByClassName("header_txt")[0];
        tabs.onmouseleave=function(){
            var divs=document.querySelectorAll("#container_1>div");
            for(var div of divs){
                div.style.display="none";
            }
        }
    }

})();



//site
(function(){
    var site=document.querySelectorAll("[data-toggle=tabs]");
    for(var s of site){
        s.onmouseenter=function(){
            var divs=document.querySelectorAll("#container_2>div")
            for(var div of divs){
                div.style.display="none";
            }
            var id=this.getAttribute("data-target")
            document.querySelector(id).style.display="block";
            var lis=this.parentNode.parentNode.children;
            for(var li of lis){
                li.style.background="";
            }
            this.parentNode.style.background="#ff6700";
            
        }
        var site=document.getElementsByClassName("site_navbar")[0];
        console.log(site);
        site.onmouseleave=function(){
            var divs=document.querySelectorAll("#container_2>div");
            for(var div of divs){
                div.style.display="none";
            }
            var lis=this.children[0].children;
            for(var li of lis){
                li.style.background="";
            }
        }
    }
    //li bg range

})();

//lincence
(function(){
    var as=document.querySelectorAll("[data-toggle=licence]");
    for(var a of as){
        a.onclick=function(){
            var divs=document.querySelectorAll("#container_3>div");
            for(var div of divs){
                div.style.display="none";
            }
            var id=this.getAttribute("data-target");
            document.querySelector(id).style.display="block";

            //a color range
            var focus=document.querySelector("#container>#licence_body>div.lc_inner>div>ul>li>a.active");
            if(focus!==null){
                focus.className="";
            }
            this.className="active";
        }

    }
})();










