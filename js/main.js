

let button = document.querySelector(".visitas");


button.addEventListener("click",()=>{
    console.log("Presionado")
    window.open("./html/popup.html","Popup","statusbar=no, width=800,height=400")
})





const nav = document.querySelector('body header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 40) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}