import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  // console.log(props.results);
  // check if there are results and if so, go through each meaning and within each send menaing to Meaning component
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetics} />
                </div>
              );
            })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          // return meaning.definitions[0].definition;
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
