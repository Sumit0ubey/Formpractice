const user = {
    "Sumit":"one piece",
    "Himayu": "One piece"
};

function validateAndRedirect() {
    const user_1 = document.getElementById("username").value;
    const password_1 = document.getElementById("password").value;

    if (user_1 == "Sumit" && password_1 == 81015) {
        window.open('form.html', '_blank');
        return true;
    } else {
        alert("Invalid username or password");
        return false;
    }
}

