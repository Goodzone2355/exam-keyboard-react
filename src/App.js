import "./App.css";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
    const str = "Я хочу пиццу";
    return (
        <div className="App">
            <h1>{str}</h1>
            <Keyboard str={str} />
        </div>
    );
}

export default App;
