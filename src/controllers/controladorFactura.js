let Carrito=JSON.parse(localStorage.getItem("Carrito"))

let factura=document.getElementById("factura")
//compruebo el estado del carrito de compras

if (Carrito==null) {
let fila=document.createElement("div")
fila.classList.add("row","my-5","justify-content-center")

let columna=document.createElement("div")
columna.classList.add("col-12", "col-md-4")

let imagen=document.createElement("img")
imagen.classList.add("img-fluid","w-100")

imagen.src="../../assets/img/Carro_Vacio.png"

let mensaje=document.createElement("h3")
mensaje.classList.add("text-center")
mensaje.textContent="Tu carrito esta vacio"


columna.appendChild(imagen)
columna.appendChild(mensaje)
fila.appendChild(columna)
factura.appendChild(fila)

    
}else{
//recorro el carrito
Carrito.forEach(function(producto) {
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

   let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-5")

    let columna2=document.createElement("div")
    columna1.classList.add("col-12","col-md-3")

    let columna3=document.createElement("div")
    columna1.classList.add("col-12","col-md-3")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=producto.foto

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","text-muted")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h2")
    precio.classList.add("text-center","mt-5")
    precio.textContent="Costo unidad: "+producto.precio

    let cantidad=document.createElement("h2")
    cantidad.classList.add("text-center")
    cantidad.textContent="Cantidad: "+producto.cantidad

    let subtotal=document.createElement("h2")
    subtotal.classList.add("fw-bold")
    console.log(producto.precio)
    console.log(producto.cantidad)
    console.log(producto.precio*producto.cantidad)
    let banana=producto.precio.split("$")[1]
    console.log(banana)



    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    columna2.appendChild(precio)
    columna2.appendChild(cantidad)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    fila.appendChild(columna3)
    factura.appendChild(fila)


})


}

