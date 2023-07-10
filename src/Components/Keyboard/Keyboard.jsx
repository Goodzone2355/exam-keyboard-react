import React from "react";
import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Keyboard.css";

export default function Keyboard({ str }) {
    let [stroke, setStroke] = useState("");
    let [green, setGreen] = useState(false);
    let [red, setRed] = useState(false);
    const updateDisplay = (e) => {
        if (
            str.toLowerCase().includes(e.target.value) &&
            str.toLowerCase() !== stroke &&
            red !== true
        ) {
            setStroke((stroke += e.target.value));
            setRed(false);
        }

        if (
            str.toLowerCase().includes(e.target.value) === false &&
            str.toLowerCase() !== stroke
        ) {
            setRed(true);
        }

        if (str.toLowerCase() === stroke) {
            setGreen(true);
        }
    };

    const clear = () => {
        if (stroke !== "" && red === false) {
            setStroke(stroke.slice(0, -1));
            setGreen(false);
        } else {
            setRed(false);
        }
    };
    const btns = [];
    const arrayButtons = [
        "й",
        "ц",
        "у",
        "к",
        "е",
        "ё",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю",
        " ",
    ].forEach((el) => {
        btns.push(
            <button onClick={updateDisplay} value={el}>
                {el}
            </button>
        );
    });

    return (
        <div className="wrapper">
            <Wrapper stroke={stroke} green={green} red={red} />
            <div className="keyboard">
                {btns}
                <button onClick={clear}>&larr;</button>
            </div>
        </div>
    );
}
