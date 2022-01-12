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

function CheckIfVisibleAll() { /// checks all elements with class detect, wether they need to become visible or not
    const detect = document.querySelectorAll(".detect");
    const sequanceDetect = document.querySelectorAll(".sequance-detect");

    detect.forEach((current) => {
        IsVisible(current, true);
    }) 

    sequanceDetect.forEach((current) => {

        const detect = current.querySelectorAll(".detect-child");

        let i = 0;

        detect.forEach((current) => {
            setTimeout(() => {
                IsVisible(current, true);
            }, i*250)
            i++;
        }) 

    })
}

CheckIfVisibleAll()

document.querySelector(".container").addEventListener("scroll", CheckIfVisibleAll);