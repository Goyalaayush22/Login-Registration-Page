let userForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
}

function submitUser() {
    buildForm();
    validateForm();
}

function buildForm() {
    userForm.name = document.getElementById("Name").value;
    userForm.email = document.getElementById("Email").value;
    userForm.password = document.getElementById("Password").value;
    userForm.confirmPassword = document.getElementById("confirmPassword").value;
    userForm.phone = document.getElementById("phoneNumber").value;

}


function validateForm() {
    if (userForm.name && userForm.email && userForm.password && userForm.phone && userForm.confirmPassword) {
        if (userForm.password === userForm.confirmPassword) {
            alert(userForm.name + " your data saved successfully");
            storage();
            clearData();
        } else {
            alert("your password does not match");
        }
    } else {
        alert("Please enter valid data");
    }
}

function clearData() {
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("phoneNumber").value = "";
}

function login() {
    let email = document.getElementById("LEmail").value;
    let password = document.getElementById("LPassword").value;
    if (email && password) {
        let data = localStorage.getItem("userData");
        data = JSON.parse(data);
        if (email === data?.email && password === data?.password) {
            alert("Login Success");
        } else {
            alert("Please enter valid Email and Password");
        }
    } else {
        alert("Please enter valid data");
    }

}

function createNewAccount() {
    document.getElementById("login").style.display = "none";
    document.getElementById("registration").style.display = "block";
}

function backToLogin() {
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function storage() {
    // localStorage.setItem("email",userForm.email);
    // localStorage.setItem("password",userForm.password);
    localStorage.setItem("userData", JSON.stringify(userForm));

}