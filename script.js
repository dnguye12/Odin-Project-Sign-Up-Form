let regBtn = document.getElementById("reg");

let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");

regBtn.addEventListener("click", function() {
    if(pass.value != cpass.value) {
        cpass.setCustomValidity("Passwords doesn't match");
    }
});