import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")

botonRegistro.addEventListener("click",function(evento){

    evento.preventDefault()

   let email=document.getElementById("Correo").value
   let password=document.getElementById("password").value
   let formulario=document.getElementById("formulario")
   console.log(email,password)




const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  