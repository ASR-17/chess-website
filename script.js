// script.js

function redirectToPage(url) {
    document.location.href = url;
}

function signOut() {
    // Clear local storage
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    // Refresh the page to show the updated state
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {

    // Retrieve the data from local storage
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');

    if (name && email) {
        // Display the user's name and email
        document.getElementById('user-name').textContent = name;
        document.getElementById('user-email').textContent = email;

        // // Show the user's information and changing size of image
        document.querySelector('.welcome').style.display = 'block';
        document.querySelector('.welcome').style.height='5%' ;
        document.getElementById('email-display').style.display = 'flex';

         // Hide the login/signup button and show the sign out button
         document.getElementById('login-signup').style.display = 'none';
         document.getElementById('sign_out-button').style.display = 'block';

         let image = document.getElementById('chess-image');
         image.style.width = '100%';  // Change this to the desired width
         image.style.height = '100'; // Maintain aspect ratio
    } else {
        // Show the login/signup button
        document.getElementById('login-signup').style.display = 'block';
        document.getElementById('sign_out-button').style.display = 'none';
        document.getElementById('email-display').style.display = 'none';
        document.querySelector('.welcome').style.display = 'none';
    }
});

window.addEventListener('load', function() {
    sessionStorage.setItem('isSessionActive', 'true');
});

