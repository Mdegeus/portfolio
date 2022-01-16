const root = "pageContainer";

const pages = {
    p1: [
        {
            target: root,
            element: {
                element: "h1",
                textContent: "Color Pallet",
                classList: "text-center"
            }
        },
        {
            target: root,
            element: {
                element: "p",
                textContent: "This is a tool wich helps you to create collor pallets for your project, or just for fun ofcourse.",
                classList: "text-center detect pop-in"
            }
        },
        {
            target: root,
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
            target: root,
            element: {
                element: "label",
                textContent: "Link:"
            }
        },
        {
            target: root,
            element: {
                element: "button",
                textContent: "Redirect",
                link: "http://mdegeus.github.io/ColorPallet",
                target: "_blank"
            }
        }
    ],
    
    p2: [
        {
            target: root,
            element: {
                element: "h1",
                textContent: "Color Pallet 2",
                classList: "text-center"
            }
        },
        {
            target: root,
            element: {
                element: "p",
                textContent: "This is a tool wich helps you to create collor pallets for your project, or just for fun ofcourse.",
                classList: "text-center detect pop-in"
            }
        },
        {
            target: root,
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
            target: root,
            element: {
                element: "label",
                textContent: "Link:"
            }
        },
        {
            target: root,
            element: {
                element: "button",
                textContent: "Redirect",
                link: "http://mdegeus.github.io/ColorPallet",
                target: "_blank"
            }
        }
    ],
};


export {pages}