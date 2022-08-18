console.log("hola estoy detallando la compra")

//llamar ala memoria
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

let Carrito
if (JSON.parse(localStorage.getItem("Carrito"))!=null) {
    Carrito=JSON.parse(localStorage.getItem("Carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=Carrito.length
}else{
    Carrito=[]
}
let carritoMemoria=JSON.parse(localStorage.getItem(producto))
console.log(carritoMemoria)

//referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

// referenciar el nombre del producto
let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre
//referenciar el precio del producto
let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio
//referenciar la descripcion del producto
let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let pildora=document.getElementById("pildora")
console.log(pildora.textContent)



//detectar la popularidad
let estrellas=document.getElementById("estrellas")
for(let i=1; i<=producto.popularidad;i++){
    let estrella=document.createElement("i")
    estrella.classList.add("bi","bi-star-fill")

    estrellas.appendChild(estrella)

}

//escucho en el boton Agregar Carrito
let botonCarrito=document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    
    // agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el carrito de compras
    Carrito.push(producto)
    console.log(Carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("Carrito",JSON.stringify( Carrito))

//PINTANDO LA PINDORA CON LA CANTIDAD DE PRODUCTO
    let cantidadCarrito=Carrito.length
    pildora.textContent=cantidadCarrito

})

