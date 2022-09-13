import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonLogin=document.getElementById("botonLogin")

botonLogin.addEventListener("click",function(evento){

    evento.preventDefault()

   let email=document.getElementById("Correo1").value
   let password=document.getElementById("password1").value
   let formulario1=document.getElementById("formulario1")
   console.log(email,password)


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  // ...
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Exito en el registro',
    showConfirmButton: false,
    timer: 1500
  })
  formulario1.reset()
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  Swal.fire({
    icon: 'error',
    title: 'Upps...',
    text: errorCode+errorMessage,
  })
  
});

})