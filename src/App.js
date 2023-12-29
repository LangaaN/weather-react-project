import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <small>
            This project is coded by Nomalanga Ndlovu and is{" "}
            <a
              href="https://github.com/LangaaN/weather-react-project"
              target="_blank"
              rel="noreferrer">
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
