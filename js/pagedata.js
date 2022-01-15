// class DataPiece {
//     //     constructor(target, element) { 
//     //         this.target = target;
//     //         this.element = element;
//     //     }
//     // }
    
//     // class Element {
//     //     constructor(element, textContent, classList) { 
//     //         this.element = element;
//     //         this.textContent = textContent;
//     //         this.classList = classList;
//     //     }
//     // }

const p1 = [
    {
        target: 'pageContainer',
        element: {
            element: "h1",
            textContent: "Color Pallet",
            classList: "text-center"
        }
    },
    {
        target: 'pageContainer',
        element: {
            element: "p",
            textContent: "This is a tool wich helps you to create collor pallets for your project, or just for fun ofcourse.",
            classList: "text-center detect pop-in"
        }
    },
    {
        target: 'pageContainer',
        element: {
            element: "div",
            classList: "img-1 center detect pop-in",
        }
    },
    {
        target: 'img-1',
        element: {
            element: "img",
            src: "./img/projectImages/colorPallet.png",
            style: "width:80%;"
        }
    },
    {
        target: 'pageContainer',
        element: {
            element: "label",
            textContent: "Link:"
        }
    },
    {
        target: 'pageContainer',
        element: {
            element: "button",
            textContent: "Redirect",
            link: "http://mdegeus.github.io/ColorPallet",
            target: "_blank"
        }
    }
]


export {p1}