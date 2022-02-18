const page = document.querySelectorAll("page");
const navBar = document.getElementById("nav-bar");

const goToHomePage = document.getElementById("go-to-home");
const home = document.getElementById("home");

const goToAboutPage = document.getElementById("go-to-about");
const about = document.getElementById("about");


const goToToolkitPage = document.getElementById("go-to-toolkit");
const toolkit = document.getElementById("toolkit");

const goToProjectsPage = document.getElementById("go-to-projects");
const projects = document.getElementById("projects");

const goToContactPage = document.getElementById("go-to-contact")
const contact = document.getElementById("contact");

goToHomePage.addEventListener("click", (event) => {
    page.forEach((p) => {
        if (!p.classList.contains("home")) {
            p.classList.toggle("hidden");
        }
    })
})