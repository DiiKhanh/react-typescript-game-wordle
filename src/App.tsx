import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./App.css";
import { Heading, Board } from "./components";
import rootState from "./components/interface";

function App() {
  const { board } = useSelector((state: rootState) => state.board);
  return (
    <div className="App">
      <Heading type="h1" text="Wordle" />
      <Heading type="subtitle" text="Another Wordle Clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
