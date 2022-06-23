





document.getElementById("button-ok").addEventListener("click",()=>{
    window.opener.establecerMensaje("Enviando un mensaje desde la ventana hija");
})


// Definición de función desde la que nos llama el padre
window.enviar = function (mensaje) {
    console.log("Mensaje: " + mensaje);
}