const buttons = document.querySelectorAll('button')
const aLinks = document.querySelectorAll('a')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            
        if (button.getAttribute('link')) {
            const targetLocation = button.getAttribute('link');
            const goToBlank = button.getAttribute('target') === "_blank";

            if (!goToBlank) {
                location.href = targetLocation;
            } else {
                window.open(targetLocation);
            }

        } else if (button.getAttribute('view')) {
            const elementSearchKey = button.getAttribute('view');
            const targetElement = document.querySelector("."+elementSearchKey) || document.querySelector("#"+elementSearchKey);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });
            console.log(targetElement)
        }

    })
})

function IsVisible(element, setVariable, otherElement) {
    if (element) {
        let position = element.getBoundingClientRect();

        // checking whether visible or not
        if(position.top >= 0 && position.bottom <= window.innerHeight + 10) {
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

function CheckIfVisibleAll() { /// checks if all elements with class detect are visible
    const detect = document.querySelectorAll(".detect");

    detect.forEach((current) => {
        IsVisible(current, true); /// check if visable, if the element is. automaticly asign or remove visible class.
    })
}

CheckIfVisibleAll()

document.querySelector(".container").addEventListener("scroll", CheckIfVisibleAll);