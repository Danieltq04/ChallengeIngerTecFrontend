

document.getElementById("button-ok").addEventListener("click",()=>{
    window.opener.establecerMensaje("Enviando un mensaje desde la ventana hija");
})