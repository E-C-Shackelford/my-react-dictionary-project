import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  // whenever a meaning is received, display partOfSpeech and move through all definitions and inside each display the definition and example
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}
