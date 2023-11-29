"use client";
import { useState } from "react";

export default function Home() {
  const [isGameActive, setIsGameActive] = useState(true);
  const [boxes, setBoxes] = useState([
    { id: 1, mark: "" },
    { id: 2, mark: "" },
    { id: 3, mark: "" },
    { id: 4, mark: "" },
    { id: 5, mark: "" },
    { id: 6, mark: "" },
    { id: 7, mark: "" },
    { id: 8, mark: "" },
    { id: 9, mark: "" },
  ]);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  function handleClick(box) {
    // if it's player 1 turn update box object with x
    // i need to update box state
    // i want all the old boxes minus the box we clicked on
    const oldBoxes = boxes.filter((_box) => _box.id !== box.id);
    const updatedBox = { ...box };
    if (isPlayer1Turn) {
      updatedBox.mark = "X";
    } else {
      updatedBox.mark = "O";
    }
    setBoxes([...oldBoxes, updatedBox]);
    setIsPlayer1Turn(!isPlayer1Turn);
  }

  return (
    <div id="board">
      {boxes
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((box) => {
          return (
            <div onClick={() => handleClick(box)} className="box" key={box.id}>
              {box.mark}
            </div>
          );
        })}
    </div>
  );
}
