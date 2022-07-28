// pasos para controlar una etiqueta desde js
//1. controlando el contenido
let etiquetaTitulo=document.getElementById("titulo")
                // html      //etiqueta
//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)
etiquetaTitulo.textContent="usted es una version verdadera"
etiquetaTitulo.classList.add("text-center")
//1.2 manipulando el src
let etiquetaImagen=document.getElementById("foto")
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasurafaha.appspot.com/o/GUAYACAN_05.webp?alt=media&token=257579e1-a0c9-4be5-b0b1-7b6321153d01"
etiquetaImagen.classList.add("d-block","mx-auto")
//2. CONTROLANDO EL DISEÑO
let parrafo = document.getElementById("parrafo")
parrafo.textContent="El principito (en francés: Le Petit Prince) es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry (1900-1944)."

//2.1 agregando un estilo (class)
//text-danger
parrafo.classList.add("text-danger","fs-1","text-center")

//2.2 quitar un estilo ()
parrafo.classList.remove("text-danger")
