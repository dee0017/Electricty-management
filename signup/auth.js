// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAGtNsgTpZL5g08-_OwRs2lIbvvi5sFFkA",
    authDomain: "rt-elect.firebaseapp.com",
    projectId: "rt-elect",
    storageBucket: "rt-elect.firebasestorage.app",
    messagingSenderId: "970529270247",
    appId: "1:970529270247:web:390ac51ab0f4ea24273542",
    measurementId: "G-6ZPD117S8Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Redirect logged-in users trying to access the signup page
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.href = '/dashboard/dashboard.html';
    }
});

// Signup Functionality
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Create user with Firebase Auth
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User created successfully, redirect to dashboard
                alert("Signup successful! Redirecting to dashboard...");
                window.location.href = '../dashboard/dashboard.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}
