import React from "react";

type ButtonProps = {
  onClick: () => void;
};

export const Button = ({ onClick }: ButtonProps) => (
  <button onClick={onClick}>Click Me!</button>
);
