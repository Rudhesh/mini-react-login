import ReactDom from "react-dom";

function Box() {
    return <p>Hello React</p>
}

ReactDom.render(<Box/>, document.querySelector("#react-root"))