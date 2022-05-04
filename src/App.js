import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="create" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/E-C-Shackelford/my-react-dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit My Project GitHub Page"
          >
            This project was coded by Elizabeth Shackelford
          </a>
        </footer>
      </div>
    </div>
  );
}
