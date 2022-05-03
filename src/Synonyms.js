import React from "react";

export default function Synonyms(props) {
  // check if we have synonyms, loop through them one at a time, and display synonym for each
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
