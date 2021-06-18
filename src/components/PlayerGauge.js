import "./PlayerGauge.css"
import {React, useState} from 'react';

function PlayerGauge() {
    const [memory,setMemory] = useState(0);
    const [player, setPlayer] = useState('player1');

    const addMemory = (event) =>{
        document.getElementById(memory).className ="";
        let mem = event.target.value;
        setMemory(mem);
        document.getElementById(mem).className ="active";
        
    }

    const reset = (event) =>{
        setMemory(0);
    }

    return (
        <div className="gauges">
            <div className="player1">
                <button id="1" onClick={addMemory} value="1">1</button>
                <button id="2" onClick={addMemory} value="2">2</button>
                <button id="3" onClick={addMemory} value="3">3</button>
                <button id="4" onClick={addMemory} value="4">4</button>
                <button id="5" onClick={addMemory} value="5">5</button>
                <button id="6" onClick={addMemory} value="6">6</button>
                <button id="7" onClick={addMemory} value="7">7</button>
                <button id="8" onClick={addMemory} value="8">8</button>
                <button id="9" onClick={addMemory} value="9">9</button>
                <button id="10" onClick={addMemory} value="10">10</button>
            </div>
            <button class="active" id ="0" onClick={addMemory} value="0">0</button>
            <div className="player2">
                <button id="-1" onClick={addMemory} value="-1">1</button>
                <button id="-2" onClick={addMemory} value="-2">2</button>
                <button id="-3" onClick={addMemory} value="-3">3</button>
                <button id="-4" onClick={addMemory} value="-4">4</button>
                <button id="-5" onClick={addMemory} value="-5">5</button>
                <button id="-6" onClick={addMemory} value="-6">6</button>
                <button id="-7" onClick={addMemory} value="-7">7</button>
                <button id="-8" onClick={addMemory} value="-8">8</button>
                <button id="-9" onClick={addMemory} value="-9">9</button>
                <button id="-10" onClick={addMemory} value="-10">10</button>
            </div>
        </div>
    )
}

export default PlayerGauge;