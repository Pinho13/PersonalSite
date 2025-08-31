import * as tools from "./tools.js";

// NAMES
const names = document.getElementsByClassName("name");

for(let name of names) {
    name.addEventListener("mouseenter", () => {tools.appearText(name, "Pinh")});
    name.addEventListener("mouseleave", () => {tools.disappearText(name, 1)});
}
//


// SECTIONS
const startSection = document.getElementsByTagName("main")[0];
const homeSection = document.getElementsByClassName("home-section")[0];
const optionsSection = document.getElementsByClassName("options")[0];
const aboutSection = document.getElementsByClassName("about-me")[0];
const gamesSection = document.getElementsByClassName("games")[0];
const projectsSection = document.getElementsByClassName("projects")[0];
const randomSection = document.getElementsByClassName("random")[0];
const sections = [aboutSection, gamesSection, projectsSection, randomSection];
tools.setCurrentSection(startSection);
//

// START SECTION
const press = document.getElementsByClassName("blinker")[0];
const clickable = document.getElementsByClassName("anywhere")[0];

clickable.addEventListener("click", () => {tools.enterSection(homeSection,optionsSection);});
clickable.onmousedown = ()=>{press.classList.add("pressed");};
setTimeout(() => {tools.appearText(press, "Press me");}, 500);
//

// HOME SECTION
const buttons = document.getElementsByClassName("button");
buttons[0].addEventListener("click", () => {tools.enterSection(sections[0]);});
buttons[1].addEventListener("click", () => {tools.enterSection(sections[1]);});
buttons[2].addEventListener("click", () => {tools.enterSection(sections[2]);});
buttons[3].addEventListener("click", () => {tools.enterSection(sections[3]);});
const homeButton = document.getElementsByClassName("home-button")[0];
homeButton.addEventListener("click", () => {tools.enterSection(optionsSection);})
//
