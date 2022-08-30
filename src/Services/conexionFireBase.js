
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYTf0_nZi5obSLMhtMnmEfv6RCcFMuM08",
    authDomain: "tiendasurafaha.firebaseapp.com",
    projectId: "tiendasurafaha",
    storageBucket: "tiendasurafaha.appspot.com",
    messagingSenderId: "975557550534",
    appId: "1:975557550534:web:9d05e6117009c5262152c7",
    measurementId: "G-RZVJR2W7XJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
