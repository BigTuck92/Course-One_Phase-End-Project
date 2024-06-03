// Password-Match Validation for register.html
function vPassword() {
    let var1 = document.getElementById("password").value;
    let var2 = document.getElementById("rePassword").value;

    if (var1 !== var2) {
        document.getElementById("pError").innerHTML = "Passwords do not Match!"
        return false
    } else {
        document.getElementById("pError").innerHTML = ""
        return true;
    }
}