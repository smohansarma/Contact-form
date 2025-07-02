  document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});

function validateform() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var msg = document.getElementById("message").value.trim();
  
    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    var emailPattern = /^\S+@\S+\.\S+$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (phone === "" || phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    if (msg === "" || msg.length < 10) {
        alert("Please enter a message with at least 10 characters");
        return false;
    }

    return true;
}
