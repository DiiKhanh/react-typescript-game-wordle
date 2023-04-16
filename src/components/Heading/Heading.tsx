import React from "react";
import "./heading.css";

interface IProps {
  type: String;
  text: string;
}

const Heading: React.FC<IProps> = (props) => {
  const { text, type } = props;
  return <p className={`heading-${type}`}>{text}</p>;
};

export default Heading;
