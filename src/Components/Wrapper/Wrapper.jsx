import React from "react";
import "./Wrapper.css";

export default function Wrapper({ stroke, red, green }) {
    return (
        <div className="wrapper">
            <input
                defaultValue={stroke}
                className={green ? "g" : null || red ? "r" : null}
            />
        </div>
    );
}
