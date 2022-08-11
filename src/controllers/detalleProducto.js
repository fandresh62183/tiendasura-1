console.log("hola estoy detallando la compra")

//llamar ala memoria
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

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

