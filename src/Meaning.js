import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  // whenever a meaning is received, display partOfSpeech and move through all definitions and inside each display the definition and example
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <span className="definition-text"></span>{" "}
              <span className="definition-details">
                {definition.definition}
              </span>
            </div>

            <div className="examples">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}
