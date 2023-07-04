// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBYWyJh5w-qubNs1HfStubm-PA0epI9Y",
  authDomain: "oyin-b8dcb.firebaseapp.com",
  projectId: "oyin-b8dcb",
  storageBucket: "oyin-b8dcb.appspot.com",
  messagingSenderId: "1001486664984",
  appId: "1:1001486664984:web:d9e56b5aa668b21ac5ca6d"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

    }
    else {
        // alert("you have been logged out");
        // window.location = "l.html"
    }
  })

//   logout funtion

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("ghhsd")
    auth.signOut();
    // alert("signed outdsdsd")
    window.location = "index.html"
})

 