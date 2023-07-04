import { Constants } from "./constants/Constants";
import "../styles/TicTacToe.css";

const TicTacToe = () => {

  const {
    TITLE
  } = Constants;

  return(
    <div className="tictactoe-container" data-testid="tictactoe">
      <div className="header" data-testid="header">{TITLE}</div>
    </div>
  );
}

export default TicTacToe;
