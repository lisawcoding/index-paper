var headers=document.querySelectorAll("header div");
var mains=document.querySelectorAll("main>div");
var audio=document.querySelector(".book");
// var h=window.getComputedStyle(mains).getPropertyValue("margin-top");

function resetIndex(){
    for(var i=0; i<headers.length; i++){
        headers[i].style.zIndex="0";
        mains[i].style.zIndex="0";
    }
}
function setHeight(){
    for(var i=0; i<mains.length; i++){
        mains[i].style.height="200px";
        mains[i].style.overflow="hidden";
    }
}
function clickHeader(n){
    resetIndex();
    setHeight();
    mains[n].style.zIndex="1";
    mains[n].style.height="auto";
    headers[n].style.zIndex="1";
    
}
function hoverHeader(n){
    // resetIndex();
    headers[n].classList.add("hoverHeader");
    mains[n].classList.add("hoverHeader");
    document.querySelector(".book").play();
}
function unhoverHeader(n) {
    headers[n].classList.remove("hoverHeader");
    mains[n].classList.remove("hoverHeader");
    // audio.stop();
}


var btn=document.querySelectorAll("button");

for(var i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        document.querySelector(".game").play();
    })
}

var c=document.querySelectorAll(".c");
var e=document.querySelectorAll(".e");
document.querySelector("#chinese").addEventListener("click", function(){
    for(var i=0; i<c.length; i++){
        c[i].style.display="block";
        e[i].style.display="none";
    }
})
document.querySelector("#english").addEventListener("click", function(){
    for(var i=0; i<c.length; i++){
        c[i].style.display="none";
        e[i].style.display="block";
    }
})

















    // var swiper = new Swiper('body', {
    //   slidesPerView: 1,
    // });
// var mediaElem=document.querySelector(".main2 .computer").contentWindow.document.getElementsByTagName("*");

// var x=window.matchMedia("(max-width:791px)");

// function resetCSSMedia(){
//     if(x.matches){
//         // mediaElem.removeAttribute();
//         removeRule();
//         // mediaElem.removeAttribute('style');
//     }
// }

// function removeRule() {
//     if(typeof window.CSSMediaRule !== "function") 
//         return false; //Your browser doesn't support media query feature

//     var s = document.styleSheets, r,
//         i, j, k;

//     if(!s) return false; //no style sheets found

//     // walk throuth css sheets
//     for(i=0; i<s.length; i++) {
//         // get all rules
//         r = s[i].cssRules; 
//         if(!r) continue;

//         for(j=0; j<r.length; j++) {
//             //If there's a rule for media query
//             if(r[j] instanceof CSSMediaRule &&
//                     r[j].media.mediaText == "only screen and (min-width: 600px)") {
//                 for(k=0; k<r[j].cssRules.length; k++) {
//                     // remove all rules of it
//                     r[j].deleteRule(r[j].cssRules[k]);
//                 }
//                 return true;
//             }
//         }
//     }
// }
// window.addEventListener("load", function(){
//     removeRule();
//     resetCSSMedia();
// })
// removeRule();

