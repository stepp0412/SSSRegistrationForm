document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var userID = document.getElementById("userID").value;
    var confirmUserID = document.getElementById("confirmUserID").value;
    var surname = document.getElementById("surname").value;
    var givenName = document.getElementById("givenName").value;
    var birthDate = document.getElementById("birthDate").value;

    if (ssn === "" || email === "" || confirmEmail === "" ||
        userID === "" || confirmUserID === "" ||
        surname === "" || givenName === "" || birthDate === "") {

        alert("Please complete all required fields.");
        return;
    }

    if (email !== confirmEmail) {
        alert("Email addresses do not match.");
        return;
    }

    if (userID !== confirmUserID) {
        alert("User IDs do not match.");
        return;
    }

    alert("Registration successful!");
});