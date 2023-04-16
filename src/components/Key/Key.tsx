import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incPos, setBoard } from "../../redux/boardSlice";
import rootState from "../interface";
import "./key.css";

interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const { board, pos, row } = useSelector((state: rootState) => state.board);
  const dispatch = useDispatch();

  const currentRow = Math.floor(pos / 5);

  const chooseLetter = () => {
    if (pos >= 30) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[pos] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
