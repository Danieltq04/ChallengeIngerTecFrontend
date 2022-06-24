




const nav = document.querySelector('body header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 40) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



/* Cargar desde ajax */
const url = '../home.json'
const http = new XMLHttpRequest()

let textarea = document.getElementById("value-textarea");
document.getElementById("load-textarea").addEventListener("click",()=>{
    http.open("GET", url)

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(JSON.parse(http.responseText))
            textarea.innerHTML = JSON.parse(http.responseText).texto;
            console.log(textarea.innerHTML)
            document.getElementById("title-ajax").innerHTML = "Texto cargado mediante AJAX"
        }
    }
    http.send()
})


document.querySelector(".social-github").addEventListener("click",()=>{
    window.open("https://github.com/Danieltq04")
})
document.querySelector(".social-youtube").addEventListener("click",()=>{
    window.open("https://www.youtube.com/channel/UCTWpcANvZaGCEKrS5NSDedg")
})
document.querySelector(".social-linkedin").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/danieltq04/")
})



// imgs.forEach(element => {
//     element.addEventListener("click",()=>{
//         console.log(this)
//     })
// });
let popup;

window.onload = () => {
    let imgs = document.querySelectorAll("main > .img-article> img");
    console.log(imgs)
    for (var i = 0; i < imgs.length; i++){
        console.log("a")
        imgs[i].addEventListener("click",function (e) { 
            //console.log(this.dataset.valor) 
            //console.log(this.src) 
            //$('#paresModal').modal('show');
            //i%2
            if(this.dataset.paridad == "par"){
                console.log("Es par")
                $('#paresModal').modal('show');
                document.getElementById("modal-img").src = this.src;
                console.log(document.getElementById("modal-img").src)

                document.getElementById("refvisitas"+this.dataset.refvisitas).innerHTML= parseInt(document.getElementById("refvisitas"+this.dataset.refvisitas).innerHTML)+1;

            }
            else{
                console.log("Es impar")
                console.log(this.src)
                console.log(this.src.split("https://")[1])
                console.log(String(this.src))
                console.log("a"+this.src)
                console.log(typeof(this.src));
                let enlace = this.src;
                let refviews = this.dataset.refvisitas;
                popup;
                popup = window.open("./html/popup.html","Popup","statusbar=no, width=800,height=400");
                
                popup.addEventListener("DOMContentLoaded", function () {
                    console.log("Ventana abierta lista!");
                    //popup.enviar("Hola. Enviando datos desde la ventana asdspadre a la hija");
                    popup.enviar(enlace,refviews);
                    // popup.enviar(""+this.src);
                    // popup.enviar(String(this.src));
                    // popup.enviar(this.src.split("https://")[1]);
                });
                
                // Definición de función
                



            }
        })
    }
};

function incrementarVisita(referenciaImg) {
    console.log("Mensaje recibido de hijo: ", referenciaImg)
    document.getElementById("refvisitas"+referenciaImg).innerHTML= parseInt(document.getElementById("refvisitas"+referenciaImg).innerHTML)+1;
}
function cerrarVentana(){
    popup.close()
}
// let button = document.querySelector(".visitas");

// let popup;
// button.addEventListener("click",()=>{
//     console.log("Presionado")
//     popup = window.open("./html/popup.html","Popup","statusbar=no, width=800,height=400");
    
//     popup.addEventListener("DOMContentLoaded", function () {
//         console.log("Ventana abierta lista!");
//         popup.enviar("Hola. Enviando datos desde la ventana asdspadre a la hija");
//     });
    
// })
// // Definición de función
// function establecerMensaje(m) {
// 	console.log("Mensaje recibido de hijo: ", m)
// }

