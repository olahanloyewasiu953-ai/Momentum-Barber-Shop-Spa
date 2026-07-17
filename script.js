// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// STICKY NAVBAR
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(0,0,0,.92)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.5)";

    }else{

        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";

    }

});
// ==============================
// WHATSAPP BOOKING
// ==============================

const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;

        if(name === "" || phone === "" || service === "Select Service"){

            alert("Please complete the booking form.");

            return;

        }

        alert("Appointment Ready!\n\nPress OK to continue to WhatsApp.");

        const text =
`Hello Momentum Barber Shop & Spa,

I would like to book an appointment.

Name: ${name}

Phone: ${phone}

Service: ${service}

Date: ${date}

Time: ${time}

Message: ${message}`;

        const url = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(text)}`;

        window.open(url,"_blank");

    });

}

// ==============================
// SIMPLE SCROLL ANIMATION
// ==============================

const cards = document.querySelectorAll(
".service-card,.why-card,.price-card,.testimonial-card,.gallery-item,.video-card,.contact-card"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});

// ==============================
// GALLERY IMAGE ENLARGE
// ==============================

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});