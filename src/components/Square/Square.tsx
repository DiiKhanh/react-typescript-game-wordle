import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./square.css";
import { useSelector } from "react-redux";
import rootState from "../interface";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  // props
  const { val, squareIdx } = props;
  // redux state
  const { row, pos, correctWord } = useSelector(
    (state: rootState) => state.board
  );
  // state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  //
  let currentPos = (pos - 1) % 5;

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      duration: 0.2,
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      duration: 0.2,
    }),
  };

  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const status: any =
    Math.floor(squareIdx / 5) < row &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
