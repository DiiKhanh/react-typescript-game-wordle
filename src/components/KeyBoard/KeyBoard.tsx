import React from "react";
import { Key } from "../";
import { useDispatch, useSelector } from "react-redux";
import rootState from "../interface";
import wordList from "../../words.json";
import { decPos, incRow, setBoard } from "../../redux/boardSlice";
import "./keyboard.css";

const KeyBoard = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const { board, pos, row, correctWord } = useSelector(
    (state: rootState) => state.board
  );
  const dispatch = useDispatch();
  let allWords: string[] = wordList.words;
  let board5Words: string = `${board[pos - 5]}${board[pos - 4]}${
    board[pos - 3]
  }${board[pos - 2]}${board[pos - 1]}`.toLowerCase();

  const clickBack = () => {
    if (Math.floor((pos - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[pos - 1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };

  const clickEnter = () => {
    if (allWords.includes(board5Words) === false) {
      alert("Invalid words");
    }
    if (allWords.includes(board5Words)) {
      if (pos % 5 === 0 && pos !== 0) {
        dispatch(incRow());
      }
    }
    if (pos === 30 && allWords.includes(board5Words)) {
      alert("The word is: " + correctWord);
    }
  };

  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
            {idx === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toLocaleUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
