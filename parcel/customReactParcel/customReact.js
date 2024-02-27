function customRender(a,b){
    const domElement = document.createElement(a.type);
    domElement.innerHTML = a.child;
    domElement.setAttribute('href',a.props.href);
    domElement.setAttribute('target',a.props.target);

    b.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: 'blank',
    },
    child : "click me bruhh!!"
}

const mainContainer=document.getElementById('root');


customRender(reactElement,mainContainer)
