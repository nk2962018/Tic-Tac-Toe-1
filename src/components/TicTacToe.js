import { useState } from "react";
import { Constants } from "./constants/Constants";
import "../styles/TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {

  const {
    TITLE,
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    PLAYER_X
  } = Constants;

  const [board, setBoard] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));

  const updateBoardOnMarkingSelectedTile = (currentTile, desiredTile, board) => {
    return currentTile === desiredTile ? PLAYER_X : board;
  }

  const updatedTileAfterMarking = (desiredTile) => {
    const tilesAfterClicking = board.map((board, currentTile) => {
      return updateBoardOnMarkingSelectedTile(currentTile,desiredTile,board)
    });
    setBoard(tilesAfterClicking);
  }

  return(
    <div className="tictactoe-container" data-testid="tictactoe">
      <div className="header" data-testid="header">{TITLE}</div>
      <Board boardTestId="board" tiles={board} onClick={updatedTileAfterMarking}/>
    </div>
  );
}

export default TicTacToe;
