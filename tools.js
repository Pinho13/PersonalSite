let deleting = null
export let current_section

export function setCurrentSection(section) {
  current_section = section;
}

export async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export async function appearText(element, text, delay=50) {
    for(let i = text.length-1; i >= 0; i--) {
        if (deleting == element) {
            break;
        }
        element.innerHTML = text[i] + element.innerHTML;
        await sleep(delay);
    }
}

export async function disappearText(element, numberOfChar=0, delay=50) {
    deleting = element;
    for(let char of element.innerHTML) {
        if (element.innerHTML.length === numberOfChar) {
            break;
        }
        element.innerHTML = element.innerHTML.substring(1);
        await sleep(delay);
    }
    deleting = null;
}

export async function reverseAppearText(element, text, delay=50) {
    for(let char of text) {
        element.innerHTML = element.innerHTML + char;
        await sleep(delay);
    }
}

export async function enterSection(newSec, setNewSec=undefined) {
    if (setNewSec === undefined) {
        setNewSec=newSec;
    }
    current_section.classList.remove("fade-in");
    current_section.classList.add("fade-out");
    await sleep(400)
    current_section.classList.add("disabled");
    current_section.classList.remove("fade-out");
    await sleep(200);

    newSec.classList.remove("disabled");
    newSec.classList.remove("fade-out");
    newSec.classList.add("fade-in");
    setTimeout(() => {newSec.classList.remove("fade-in");}, 400);

    setCurrentSection(setNewSec);
    
    const write = document.getElementsByClassName("write");
    for(let el of write) {
        let t = el.getAttribute("data-text");
        el.innerHTML = "";
        reverseAppearText(el, t);
    }
}


export function textEffect() {
    const elements = document.getElementsByClassName("text-effect");
    for(let el of elements) {
        let array = el.innerHTML.split(" ");
        let newHTML = "";
        for (let word of array) {
            newHTML += '<span class="text-pop">' + word +'</span> ';
        }
        el.innerHTML = newHTML;
    }
}