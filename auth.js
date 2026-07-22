let islogin1 = false;
let islogin2 = false;


function checkLogin() {
    if (islogin1 == true) {
        window.location.href = "memory.html";
    }
    else if (islogin2 == true) {
        window.location.href = "video.html";
    }
}
function login1() {
    const input = document.getElementById("endtitre1");
    const val = (input.value || "").trim();
    if (val.toLowerCase() === "wing") {
        islogin1 = true;
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
    }
    checkLogin();
}

function login2() {
    const input2 = document.getElementById("endtitre2");
    const val2 = (input2?.value || "").trim();
    if (val2.toLowerCase() === "monte-cristo") {
        islogin2 = true;
        input2?.classList.remove("is-invalid");
    } else {
        input2?.classList.add("is-invalid");
    }

    checkLogin();
} 