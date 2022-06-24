
let refImg;

window.sendSrcAndRef = function (srcImg, refviews) {
    refImg = refviews;
    document.querySelector("main").style.backgroundImage = `url(${""+srcImg})`
}


document.getElementById("button-ok").addEventListener("click",()=>{
    window.opener.increaseVisits(refImg);
})
document.querySelector(".close").addEventListener("click",()=>{
    window.opener.closePopup();
})