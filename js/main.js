

let button = document.querySelector(".visitas");

let popup;
button.addEventListener("click",()=>{
    console.log("Presionado")
    popup = window.open("./html/popup.html","Popup","statusbar=no, width=800,height=400");
    // window.establecerMensaje = function (mensaje) {
    //     console.log("Mensaje: " + mensaje);
    // }
    // popup.addEventListener("DOMContentLoaded", function () {
    //     console.log("Ventana abierta lista!");
    //     popup.establecerMensaje("Hola. Enviando datos desde la ventana padre a la hija");
    //   });
    /*popup.addEventListener("DOMContentLoaded", function () {
        console.log("Ventana abierta lista!");
        popup.establecerMensaje("Hola. Enviando datos desde la ventana padre a la hija");
    });*/
})
// Definición de función
function establecerMensaje(m) {
	console.log("Mensaje recibido de hijo: ", m)
}




const nav = document.querySelector('body header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 40) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


