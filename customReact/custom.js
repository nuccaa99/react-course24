function customRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement)

}

const elem = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRender(elem, mainContainer)