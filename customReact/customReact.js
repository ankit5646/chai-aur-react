function customRender(a,b){
    /* const domElement = document.createElement(a.type)
     domElement.innerHTML = a.child;
     domElement.setAttribute('href',a.props.href)
     domElement.setAttribute('target', a.props.target)

     b.appendChild(domElement);
     */

     const domElement = document.createElement(a.type);
     domElement.innerHTML =  a.child;

     for (const prop in a.props) {
         domElement.setAttribute(prop, a.props[prop])
     }

     b.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target: 'blank'
    },
    child : 'click me to visit google'
}

const mainContainer = document.querySelector(".root")


customRender(reactElement,mainContainer);