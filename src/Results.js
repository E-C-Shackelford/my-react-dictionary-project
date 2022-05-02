import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // console.log(props.results);
  // check if there are results and if so, go through each meaning and within each send menaing to Meaning component
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          // return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
