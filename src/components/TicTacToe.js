import { useState } from "react";
import { Constants } from "./constants/Constants";
import "../styles/TicTacToe.css";
import Board from "./Board";
import Status from "./Status";

const TicTacToe = () => {

  const {
    TITLE,
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    PLAYER_X,
    PLAYER_O
  } = Constants;

  const [board, setBoard] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const updateBoardOnMarkingSelectedTile = (currentTile, desiredTile, board) => {
    if(currentTile === desiredTile) {
      return currentPlayer === PLAYER_X ? PLAYER_X : PLAYER_O;
    }
    return board;
  }

  const updatedTileAfterMarking = (desiredTile) => {
    const updateBoard = [...board]
    if(updateBoard[desiredTile]) return;
    const tilesAfterClicking = board.map((board, currentTile) => {
      return updateBoardOnMarkingSelectedTile(currentTile,desiredTile,board)
    });
    setBoard(tilesAfterClicking);
    nextPlayerTurn();
  }

  const nextPlayerTurn = () => {
    setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X );
  }

  return(
    <div className="tictactoe-container" data-testid="tictactoe">
      <div className="header" data-testid="header">{TITLE}</div>
      <Board boardTestId="board" tiles={board} onClick={updatedTileAfterMarking}/>
      <Status player={currentPlayer}/>
    </div>
  );
}

export default TicTacToe;
