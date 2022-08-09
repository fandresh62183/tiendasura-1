let contenedorProducto=document.getElementById("fila");

//escucho clic en la fila
let informacionProducto={}
contenedorProducto.addEventListener("click",function (evento) {
    if(evento.target.classList.contains("img-fluid")){
       informacionProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("p").textContent)
        informacionProducto.popularidad=(evento.target.parentElement.querySelector("q").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("s").textContent)
// guargando un objeto en memoria
        localStorage.setItem(JSON.stringify("producto",informacionProducto))

        window.location.href="./ampliarInf.html"
    }
    }
)

