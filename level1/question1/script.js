//Use RegEx to validate form
function myFunction() {
    document.getElementById("form").submit();
}
function validateEmail(email) {
    var emailTrue = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailTrue.test(email);
}
function validatePhone(telephone) {
    var phoneTrue = /^\d{10}$/;
    return phoneTrue.test(telephone);
}
