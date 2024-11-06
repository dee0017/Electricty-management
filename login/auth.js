// Redirect logged-in users trying to access the login page
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});

// Login Functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Log in with Firebase Auth
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User logged in successfully, redirect to dashboard
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = '../dashboard.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}
