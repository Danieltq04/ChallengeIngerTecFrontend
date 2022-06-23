






let refImg;
// Definición de función desde la que nos llama el padre
window.enviar = function (mensaje, refviews) {
    console.log("Mensaje: " + mensaje);
    console.log(mensaje,refviews);
    refImg = refviews;
    document.querySelector("main").style.backgroundImage = `url(${""+mensaje})`
    console.log(document.querySelector("main"))
}


document.getElementById("button-ok").addEventListener("click",()=>{
    window.opener.establecerMensaje(refImg);
})