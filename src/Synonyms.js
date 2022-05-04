import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  // check if we have synonyms, loop through them one at a time, and display synonym for each
  if (props.synonyms) {
    return (
      <div>
        <span className="synonym-text">Synonyms:</span>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
