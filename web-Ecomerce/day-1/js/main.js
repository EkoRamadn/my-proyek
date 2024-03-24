function togglePasswordVisibility() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.getElementById("myForm").addEventListener("input", function() {
    let passwordField = document.getElementById("password");
    let emailField = document.getElementById("email");
    let submitButton = document.getElementById("submitButton");

    // Cek apakah salah satu input kosong
    if ( passwordField.value === "" || emailField.value === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }

    if(passwordField.value.trim() !== ""){
        passwordField.classList.add("active")
    }else{
        passwordField.classList.remove('active')
    }
    if(emailField.value.trim() !== ""){
        emailField.classList.add("active")
    }else{
        emailField.classList.remove('active')
    }
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    var passwordField = document.getElementById("password");
    var emailField = document.getElementById("email");

    // Validasi Password
    var passwordPattern = /^(?=.*[0-9])[\w_]+$/;
    if (passwordField.value.length <= 5 || !passwordPattern.test(passwordField.value)) {
        alert("Password harus lebih dari 5 karakter dan mengandung angka. Hanya boleh menggunakan underscore (_) sebagai karakter khusus.");
        event.preventDefault();
    }

    // Validasi Email menggunakan regex sederhana
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailField.value)) {
        alert("Email tidak valid.");
        event.preventDefault();
    }
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault()
    // let succNontif = document.getElementById("succesNontif");
    // let tif = docement.getElementById("fail");
    let passwordField = document.getElementById("password")
    let emailField = document.getElementById("email")
    if(emailField.value === "email@email.com" && passwordField.value === "ekorama234"){

        document.getElementById("succesNontif").classList.add("active")

        setTimeout(()=>{
            document.getElementById("succesNontif").classList.remove("active")
        },2000)
    }else{
        document.getElementById("fail").classList.add("active")
    
        setTimeout(()=>{
            document.getElementById("fail").classList.remove("active")
        },2000)
    }
    
   
})
// alert(document.getElementById("fail"))

document.querySelectorAll(".information").forEach((info)=>{
    info.addEventListener("click",(e)=>{
        e.target.classList.remove("active")
    })
})
const hei = document.querySelector(".popup-login")
document.getElementById("close").addEventListener("click",()=>{
    hei.classList.remove("active")
})
const login = document.querySelector("#login")
login.addEventListener("click",()=>{
    hei.classList.add("active")
})
