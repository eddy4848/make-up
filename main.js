// Fire base config
const firebaseConfig = {
  apiKey: "AIzaSyASBYWyJh5w-qubNs1HfStubm-PA0epI9Y",
  authDomain: "oyin-b8dcb.firebaseapp.com",
  projectId: "oyin-b8dcb",
  storageBucket: "oyin-b8dcb.appspot.com",
  messagingSenderId: "1001486664984",
  appId: "1:1001486664984:web:d9e56b5aa668b21ac5ca6d"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signupButton = document.getElementById("signup")

signupButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
         alert("user signed up successfully")
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
        window.location = "logged.html";
    })
    .catch((error) => {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
        alert(errorMessage)
    });
});


//Signin Function
let signInButton = document.getElementById("signin")

signInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signin click");
    
    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");
    const form = document.getElementById("form")

    auth 
    .signInWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "index1.html";
       
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Wrong Email Address or Passord")
        
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.email;
        var users = document.getElementById("user");
        users.appendChild(text);
        console.log(users);
    }
    else {

    }
});