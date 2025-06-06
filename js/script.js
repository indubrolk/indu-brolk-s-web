const yt = document.getElementById("yt-btn")
const fb = document.getElementById("fb-btn")
const ins = document.getElementById("ins-btn")
const x = document.getElementById("x-btn")
const modal = document.getElementById('popupModal');
const slides = document.getElementById('slideContainer');
let currentIndex = 0;


// const menuIcon = document.getElementById('menu-icon');
// const navLinks = document.querySelector(".nav-links");





// Add this JavaScript to your js/script.js file or in a script tag

// Window load event to hide loader and show main content
window.addEventListener('load', function() {
    // Set minimum loading time (optional - for better UX)
    const minLoadTime = 2000; // 2 seconds minimum
    const startTime = Date.now();

    function hideLoader() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        const aboutSection = document.getElementById('about');

        // Add fade out class to loader
        loader.classList.add('fade-out');

        // Wait for fade animation to complete, then hide loader and show content
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';

            // Show other sections
            if (aboutSection) {
                aboutSection.style.display = 'block';
            }

            // Show all other content that was hidden
            document.querySelectorAll('.card-bg, .form-div, footer, .website-views').forEach(element => {
                element.style.display = 'block';
            });

        }, 500); // Wait for fade animation (0.5s)
    }

    // Calculate remaining time to meet minimum load time
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadTime - elapsedTime);

    // Hide loader after remaining time
    setTimeout(hideLoader, remainingTime);
});

// Alternative: Hide loader after DOM is loaded (faster)
// Uncomment below and comment above if you want faster loading
/*
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');

        loader.classList.add('fade-out');

        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    }, 1500); // Show loader for 1.5 seconds
});
*/

// document.addEventListener("DOMContentLoaded", function(){
//
//     if(!sessionStorage.getItem("firstVisit")) {
//         sessionStorage.setItem("firstVisit", "true");
//
//
//         setTimeout(function () {
//             document.getElementById("loader").style.display = "none";
//             document.getElementById("main-content").style.display = "block";
//
//
//
//         }, 4000);
//     }
//     else{
//         document.getElementById("loader").style.display = "none";
//         document.getElementById("main-content").style.display = "block";
//
//     }
// });

function openModal() {
    modal.style.display = 'flex';
    currentIndex = 0;
    updateSlide();
}

function closeModal(){
    modal.style.display = 'none';
}

function nextSlide(){
    if(currentIndex < 1){
        currentIndex++;
        updateSlide();
    }
}

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

function openTab(videos){
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // let articles;
    document.getElementById(videos).classList.add('active');
    document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.classList.remove('active');
    });

    event.target.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const goToHomeButton = document.getElementById("go-to-home");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            goToHomeButton.style.display = "flex";
        } else {
            goToHomeButton.style.display = "none";
        }
    });
});

// function openSlider(){
//     document.getElementById("imageSliderModel").style.display = "block";
// }
//
// function closeSlider(){
//     document.getElementById("imagesSliderModal").style.display = "none";
// }