import { useState } from "react";
import { Constants } from "./constants/Constants";
import "../styles/TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {

  const {
    TITLE,
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY
  } = Constants;

  const [board] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));

  return(
    <div className="tictactoe-container" data-testid="tictactoe">
      <div className="header" data-testid="header">{TITLE}</div>
      <Board boardTestId="board" tiles={board}/>
    </div>
  );
}

export default TicTacToe;
