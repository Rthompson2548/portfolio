let Buttons = document.querySelectorAll(".selectSection button")

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


for (let button of Buttons) {
    button.addEventListener("click", (event) => {
        const eventTarget = event.target;

        const activePage = document.querySelector(".active");

        if (activePage) {
            activePage.classList.remove("active");
        }

        eventTarget.classList.add("active");

        let allContent = document.querySelectorAll(".content");

        for (let content of allContent) {
            if (content.getAttribute("data-number") === button.getAttribute("data-number")) {
                content.style.display = "block";
            }

            else {
                content.style.display = "none";
            }
        }
    })
}
