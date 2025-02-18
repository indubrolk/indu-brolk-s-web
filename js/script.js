const yt = document.getElementById("yt-btn")
const fb = document.getElementById("fb-btn")
const ins = document.getElementById("ins-btn")
const x = document.getElementById("x-btn")
// const menuIcon = document.getElementById('menu-icon');
// const navLinks = document.querySelector(".nav-links");


document.addEventListener("DOMContentLoaded", function(){

    if(!sessionStorage.getItem("firstVisit")) {
        sessionStorage.setItem("firstVisit", "true");


        setTimeout(function () {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";


        }, 4000);
    }
    else{
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";

    }
});

// menuIcon.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });


yt.addEventListener("click",function(){
    window.location.href = "https://www.youtube.com/@indubrolk ";
});

fb.addEventListener("click",function(){
    window.location.href = "https://www.facebook.com/indubrolk/";
});

ins.addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/indu_brolk/";
});

x.addEventListener("click",function(){
    window.location.href = "https://x.com/BroIndu";
});

// sign up button

document.getElementById("sign-up").addEventListener("click", function() {
    window.location.href = "form.html";
});

function openPage(page) {
    window.open(page, '_self');
}

function showOverlay(event) {
    event.preventDefault(); // Prevents the anchor from navigating to the image URL
    document.getElementById("overlay").style.display = "flex";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function popup() {
    window.alert("Your Information Recorded Successfully!"); // Opens in a new tab
}

// form submission alert

function login() {
    alert("Log In successfully!");
    return false;
}





function showAlert() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert("Form submitted successfully!");
        window.location.href = "index.html ";
        return true;
    } else {
        alert("Please fill in both the username and password fields.");
        return false;
    }
}

function redirectTo(url) {
    window.open(url, '_blank');
}

