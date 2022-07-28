let etiquetaBoton=document.getElementById("boton")

//pasos para detectar eventos
etiquetaBoton.addEventListener("click",function(){
      console.log("estoy asiendo clic")
      let titulo=document.getElementById("titulo")
      titulo.textContent="Hola soy Fabian"
      let mensaje=document.getElementById("mensaje")
      mensaje.textContent="VAN HA GANAR"
      mensaje.classList.add("text-danger")
      let foto=document.getElementById("foto")
      etiquetatapa.src="https://firebasestorage.googleapis.com/v0/b/tiendasurafaha.appspot.com/o/4181e8bd3e1769cb67c0c82e29a3cc99-product12.webp?alt=media&token=77dc7a98-fd34-4237-b0d2-b23936c57e87"
})
 