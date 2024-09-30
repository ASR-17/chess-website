function submitForm() {
    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('Username').value;
    const password = document.getElementById('password').value;

    // Check if any field is empty
    if (!name || !email || !password) {
        alert('All fields are required.');
        return false;  // Prevent form submission
    }

    // Save the data to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Redirect to Home.html
    window.location.href = "index.html";

    return false;  // Ensure the form does not submit in the traditional way
}
