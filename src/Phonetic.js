import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <button className="listen-button">
          <i className="fa-solid fa-volume-high"></i> Listen
        </button>
      </a>
      <span className="listen-text">{props.phonetic.text}</span>
    </div>
  );
}
