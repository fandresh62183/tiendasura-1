let Carrito = JSON.parse(localStorage.getItem("Carrito"));
let totalCompra = document.getElementById("totalCompra");
let total = 0;
let bandera = true;
let factura = document.getElementById("factura");
//compruebo el estado del carrito de compras

if (Carrito == null) {
  //poner el total en 0
  totalCompra.textContent = "Total: $0";

  let fila = document.createElement("div");
  fila.classList.add("row", "my-5", "justify-content-center");

  let columna = document.createElement("div");
  columna.classList.add("col-12", "col-md-4");

  let imagen = document.createElement("img");
  imagen.classList.add("img-fluid", "w-100");

  imagen.src = "../../assets/img/Carro_Vacio.png";

  let mensaje = document.createElement("h3");
  mensaje.classList.add("text-center");
  mensaje.textContent = "Tu carrito esta vacio";

  columna.appendChild(imagen);
  columna.appendChild(mensaje);
  fila.appendChild(columna);
  factura.appendChild(fila);
} else {
  //recorro el carrito
  Carrito.forEach(function (producto) {
    let fila = document.createElement("div");
    fila.classList.add(
      "row",
      "mt-5",
      "justify-content-center",
      "shadow",
      "p-3"
    );

    let columna1 = document.createElement("div");
    columna1.classList.add("col-12", "col-md-5");

    let columna2 = document.createElement("div");
    columna2.classList.add(
      "col-12",
      "col-md-3",
      "border-end",
      "align-self-center"
    );

    let columna3 = document.createElement("div");
    columna3.textContent = "Subtotal";
    columna3.classList.add(
      "col-12",
      "col-md-3",
      "align-self-center",
      "fs-1",
      "text-center"
    );

    let foto = document.createElement("img");
    foto.classList.add("img-fluid", "w-100");
    foto.src = producto.foto;

    let nombre = document.createElement("h3");
    nombre.classList.add("text-center", "text-muted");
    nombre.textContent = producto.nombre;

    let precio = document.createElement("h2");
    precio.classList.add("text-center", "mt-5");
    precio.textContent = "Costo unidad: " + producto.precio;

    let cantidad = document.createElement("h2");
    cantidad.classList.add("text-center");
    cantidad.textContent = "Cantidad: " + producto.cantidad;

    let subtotal = document.createElement("h2");
    subtotal.classList.add("fw-bold", "text-center", "bg-dark", "text-white");
    console.log(producto.precio);
    console.log(producto.cantidad);

    let subtotalCalculado = producto.precio.split("$")[1] * producto.cantidad;
    console.log(subtotalCalculado);

    subtotal.textContent = "$" + subtotalCalculado;
    total = subtotalCalculado + total;

    

    let botonLimpiar = document.getElementById("botonLimpiar");
    botonLimpiar.addEventListener("click", function (evento) {
      //limpio el carrito de la memoria
      localStorage.removeItem("Carrito");

      //recargar la pagina
      window.location.href = "./resumenCompra.html";

      //poner el total en 0
      totalCompra.textContent = "Total: $0";
    });

    columna1.appendChild(foto);
    columna2.appendChild(nombre);
    columna2.appendChild(precio);
    columna2.appendChild(cantidad);
    columna3.appendChild(subtotal);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    factura.appendChild(fila);
  });
}
//poner el total en 0
totalCompra.textContent = total;

let conversor = document.getElementById("conversor");
conversor.classList.add("btn", "btn-primary");
conversor.textContent = "Convertir a COP";

conversor.addEventListener("click", function () {
  let COP = 4300;
  let operacion = 0;
  operacion = "COP" + total * (COP / 1);
  totalCompra.textContent = operacion;
  conversor.textContent = "Convertir a USD";

  if (bandera == true) {
    conversor.addEventListener("click", function () {
      totalCompra.textContent = "USD" + total;
    });
    bandera = !bandera;
  } else {
    conversor.addEventListener("click", function () {
      totalCompra.textContent = "COP" + operacion;
    });
    bandera = !bandera;
  }
});
