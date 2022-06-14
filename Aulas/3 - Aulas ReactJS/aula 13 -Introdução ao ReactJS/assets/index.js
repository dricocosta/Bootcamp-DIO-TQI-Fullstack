import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function sum(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        <div className="Teste">
            Adriano Costa
            <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {PrimeiroJSX()}
            {}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
