function check() {
    return password() && username()
}
function ifcheck() {
    if (check()){
        document.location.href="coupedumonde .html"
    };
}

function check2() {
    if (check()) {
        console.log("TRUE");
    } else {
        var b = document.getElementById("b1");
        /*b.style.borderColor = "rgb(0, 0, 0)";*/
        b.innerHTML = "   🔒   ";
    }
}

function uncheck() {
    var b = document.getElementById("b1");
    /*b.style.borderColor = "rgb(0, 0, 0)";*/
    b.innerHTML = "Connexion";
}

function password() {
    var password = document.getElementById("password").value;
    console.log("ok1");
    if (password === "NSI") {
        console.log("TRUE mdp");
        return true;
    } else {
        console.log("o")
        return false;
    }
}

function username() {
    var username = document.getElementById("username").value;
    console.log("ok");
    if (username === "Tempez") {
        console.log("TRUE us");
        return true;
    } else {
        return false;
    }
}
