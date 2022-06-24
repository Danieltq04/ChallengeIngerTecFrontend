let popup;

window.onload = () => {
    let enlace, refviews;
    let imgs = document.querySelectorAll("main > .img-article> img");
    for (var i = 0; i < imgs.length; i++){
        imgs[i].addEventListener("click",function (e) { 
            if(this.dataset.paridad == "par"){
                document.getElementById("modal-img").src = this.src;
                $('#paresModal').modal('show');

                document.getElementById("refvisitas"+this.dataset.refvisitas).innerHTML= parseInt(document.getElementById("refvisitas"+this.dataset.refvisitas).innerHTML)+1;
            }
            else{
                enlace = this.src;
                refviews = this.dataset.refvisitas;

                popup = window.open("./html/popup.html","Popup","statusbar=no, width=800,height=400");
                
                popup.addEventListener("DOMContentLoaded", function () {
                    popup.sendSrcAndRef(enlace,refviews);
                });
            }
        })
    }
};

/* Recibe la referencia a un artículo e incrementa el contador del articulo referenciado */
function increaseVisits(refImg) {
    document.getElementById("refvisitas"+refImg).innerHTML= parseInt(document.getElementById("refvisitas"+refImg).innerHTML)+1;
}

/* Cierra un popup */
function closePopup(){
    popup.close()
}

/* Agrega la clase active al header al hacer scroll */
const header = document.querySelector('body header')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > header.offsetHeight + 40) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})



/* Cargar texto en un textarea mediante una petición por ajax */
const url = '../home.json'
const http = new XMLHttpRequest()
let textarea = document.getElementById("value-textarea");

document.getElementById("load-textarea").addEventListener("click",()=>{
    http.open("GET", url)
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            textarea.innerHTML = JSON.parse(http.responseText).texto;
            document.getElementById("title-ajax").innerHTML = "Texto cargado mediante AJAX"
        }
    }
    http.send()
})

/* Funcionamiento de los enlaces a las redes sociales */
document.querySelector(".social-github").addEventListener("click",()=>{
    window.open("https://github.com/Danieltq04")
})
document.querySelector(".social-youtube").addEventListener("click",()=>{
    window.open("https://www.youtube.com/channel/UCTWpcANvZaGCEKrS5NSDedg")
})
document.querySelector(".social-linkedin").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/danieltq04/")
})
