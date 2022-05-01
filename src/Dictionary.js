import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert("Searching...");
  }
  function handleKeywordChange(event) {
    console.log(event);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search word..."
          autoFocus="on"
          autoComplete="off"
          onFocus={(event) => (event.target.value = "")}
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
