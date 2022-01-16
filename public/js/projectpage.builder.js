class DataPiece {
    constructor(target, element) { 
        this.target = target;
        this.element = element;
    }
}

class Element {
    constructor(element, textContent, classList) { 
        this.element = element;
        this.textContent = textContent;
        this.classList = classList;
    }
}

function buildPage(data) {
    console.log(data);
    if (data) {
        data.forEach((dataPiece) => {
            console.log(dataPiece);
            const target = dataPiece.target;
            
            const element = buildElement(dataPiece.element);
    
            const targetElement = document.querySelector(target) || document.querySelector("."+target) || document.querySelector("#"+target);
            targetElement.appendChild(element);
            console.log(dataPiece.element);
        })
    }
}

function buildElement(params) {
    const object = document.createElement(params['element']);
    if (params['textContent']) {
        object.textContent = params['textContent'];
    }
    if (params['classList']) {
        object.classList = params['classList'];
    }
    if (params['href']) {
        object.setAttribute('href', params['target']);
    }
    if (params['link']) {
        object.setAttribute('link', params['link']);
    }
    if (params['target']) {
        object.setAttribute('target', params['target']);
    }
    if (params['src']) {
        object.setAttribute('src', params['src']);
    }
    if (params['style']) {
        object.setAttribute('style', params['style']);
    }
    return object;
}

function setPageDataToStorage(data) {
    const string = JSON.stringify(data);
    localStorage.setItem('pageData', string);
}

function getPageDataFromStorage() {
    const json = JSON.parse(localStorage.getItem('pageData'));

    return json;
}

function clearPageDataFromStorage() {
    localStorage.setItem('pageData', null);
}

export {setPageDataToStorage};

if (document.querySelector(".pageContainer")) {
    buildPage(getPageDataFromStorage());
}
