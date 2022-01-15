import {setPageDataToStorage} from "./projectpage.builder.js";
import {pages} from "./pagedata.js";

const buttons = document.querySelectorAll('button')
const aLinks = document.querySelectorAll('a')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            
        if (button.getAttribute('link')) {
            const targetLocation = button.getAttribute('link');
            const goToBlank = button.getAttribute('target') === "_blank";
            let delay = button.getAttribute('delay');

            if (!delay) {
                delay = 0;
            }

            if (button.getAttribute('createPage')) {
                const page = button.getAttribute('createPage');
                setPage(page);
            }

            setTimeout(() => {
                if (!goToBlank) {
                    location.href = targetLocation;
                } else {
                    window.open(targetLocation);
                }
            },delay);

        } else if (button.getAttribute('view')) {
            const elementSearchKey = button.getAttribute('view');
            const targetElement = document.querySelector("."+elementSearchKey) || document.querySelector("#"+elementSearchKey);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }

    })
})

function IsVisible(element, setVariable, otherElement) {
    if (element) {
        let position = element.getBoundingClientRect();

        // checking whether visible or not
        if(position.top >= -10 && position.bottom <= window.innerHeight + 10) {
            if (setVariable) {
                element.classList.add("visible")
            }
            if (otherElement) {
                otherElement.classList.add("visible")
            }
            return true;
        }

        if (setVariable) {
            element.classList.remove("visible")
        }

        if (otherElement) {
            otherElement.classList.remove("visible")
        }
    }

    return false;
}

function CheckIfVisibleAll() { /// checks all elements with class detect, wether they need to become visible or not
    const detect = document.querySelectorAll(".detect");
    const sequanceDetect = document.querySelectorAll(".sequance-detect"); /// sequanceDetect is used to detect elements in a sequance to play animations with an extra delay per element.

    detect.forEach((current) => {
        IsVisible(current, true);
    }) 

    sequanceDetect.forEach((current) => {

        const detect = current.querySelectorAll(".detect-child");

        let i = 0;

        detect.forEach((current) => {

            if (IsVisible(current)) {
                setTimeout(() => {
                    IsVisible(current, true);
                }, i*250)
                i++;
            } else {
                IsVisible(current, true);
            }
        }) 

    })
}

setTimeout(CheckIfVisibleAll, 150)

if (document.querySelector(".container")) {
    document.querySelector(".container").addEventListener("scroll", CheckIfVisibleAll);
}

function setPage(pagename) {

    const data = pages[pagename];

    setPageDataToStorage(data);
    return data;
}