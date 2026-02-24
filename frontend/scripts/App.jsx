import React, { Component } from 'react';
import { useState } from 'react';


/*class App extends Component {

    setDefaults() {

    }
    render() {
        return (
        <div>
            UI läuft
        </div>
        );
    }
    }
export default App;*/

//Gut zu wissen: Funktionen normalerweise mit React nur 1 mal aufgerufen.
//Aber: Wenn sich der State ändert, wird die Funktion erneut aufgerufen. 
// Daher: useState() verwenden um dieses Ziel zu erreichen.

export default function App() {
    const counterState = useState(0); // useState wurde hier aufgerufen im const counterState. Der Initwert von useState ist 0.
    const counter = counterState[0]; // Hier wird count definiert. counterState erhält den Wert 0.
    const setCounter = counterState[1]; //Jetzt wird ein Setter definiert. setCounter ist eine Funktion, die den Wert von counter ändert. 

    return (
    <div className="App">
        <button onClick={() => {
                setCounter(counter + 1); //Hier wird setCounter aufgerufen. Es wird der Wert 1 dazu addiert.
                console.log(counter);
            }}>
            Click me! {counter}
        </button>

    </div>);
}

