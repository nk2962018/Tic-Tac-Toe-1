import { Constants } from "./constants/Constants";
import "../styles/TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {

  const {
    TITLE
  } = Constants;

  return(
    <div className="tictactoe-container" data-testid="tictactoe">
      <div className="header" data-testid="header">{TITLE}</div>
      <Board boardTestId="board"/>
    </div>
  );
}

export default TicTacToe;
