import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants, tilePositionsToDeclareWinner } from "../components/constants/TestConstants";

describe("TicTacToe works fine when", () => {
  beforeEach(() => {
    render(<TicTacToe/>)
  });
 
  it("renders tictactoe component", () => {
    const tictactoeComponent = screen.getByTestId("tictactoe");
    expect(tictactoeComponent).toBeInTheDocument();
  });

  it("should display title", () => {
    const title = screen.getByTestId("header");
    expect(title).toBeInTheDocument();
  });
  
  it("should display correct title text", () => {
    const titleText = screen.getByTestId("header");
    expect(titleText).toHaveTextContent(TestConstants.TITLE);
  });

  it("should render board component", () => {
    const boardComponent = screen.getByTestId("board");
    expect(boardComponent).toBeInTheDocument();
  });

  it("displays message for next player's turn", () => {
    const status = screen.getByTestId("status");
    expect(status).toBeInTheDocument();
  });

});

describe("TicTacToe game works fine when" , () => {
  let tiles;
  beforeEach(() => {
    render(<TicTacToe/>)
    tiles = screen.getAllByTestId('tile');
  });

  const checkTileSymbolOnClicking = (tile, expectedSymbol) => {
    fireEvent.click(tile);
    expect(tile.textContent).toBe(expectedSymbol);
  };

  const checkSymbol = (tiles, expectedSymbol) => {
    tiles.forEach((tile) => {
      expect(tile.textContent).toBe(expectedSymbol);
    });
  };

  it("should mark first tile with X second with O and rest tiles should be empty", () => {
    const [firstTile, secondTile, ...remainingTiles] = tiles;
    checkTileSymbolOnClicking(firstTile, TestConstants.PLAYER_X);
    checkTileSymbolOnClicking(secondTile, TestConstants.PLAYER_O);
    checkSymbol(remainingTiles, TestConstants.EMPTY);
  });

  it("should not update an already marked tile", () => {
    tiles.forEach((tile)=>{
      (tile.textContent != TestConstants.EMPTY) ? 
      (checkTileSymbolOnClicking(tile,TestConstants.PLAYER_X ) || checkTileSymbolOnClicking(tile,TestConstants.PLAYER_O)) 
      : null
    });
  });

  const declareWinnerOnMarkingDesiredPositions = ({
    WINING_POSITIONS: positions,
    WINNER: winner,
  }) => {
    const { DECLARE_WINNER_MESSAGE } = TestConstants;
    positions.forEach((position) => {
      fireEvent.click(tiles[position]);
    });
    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent(`${DECLARE_WINNER_MESSAGE}${winner}`);
  };

  it(("displays winning message for player X when it marks all the first row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesFirstRow_X)
  });

  it(("displays winning message for player O when it marks all the first row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesFirstRow_O)
  });

  it(("displays winning message for player X when it marks all the second row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesSecondRow_X)
  });

  it(("displays winning message for player O when it marks all the second row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesSecondRow_O)
  });

  it(("displays winning message for player X when it marks all the third row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesThirdRow_X)
  });

  it(("displays winning message for player O when it marks all the third row winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesThirdRow_O)
  });

  it(("displays winning message for player X when it marks all the first column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesFirstCol_X)
  });

  it(("displays winning message for player O when it marks all the first column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesFirstCol_O)
  });

  it(("displays winning message for player X when it marks all the second column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesSecondCol_X)
  });

  it(("displays winning message for player O when it marks all the second column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesSecondCol_O)
  });

  it(("displays winning message for player X when it marks all the third column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesThirdCol_X)
  });

  it(("displays winning message for player O when it marks all the third column winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesThirdCol_O)
  });

  it(("displays winning message for player X when it marks all the top left diagonal winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesTopLeftBottomRightDiagonal_X)
  });

  it(("displays winning message for player O when it marks all the top left diagonal winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesTopLeftBottomRightDiagonal_O)
  });

  it(("displays winning message for player X when it marks all the top right diagonal winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesTopRightBottomLeftDiagonal_X)
  });

  it(("displays winning message for player O when it marks all the top right diagonal winning positions"), () => {
    declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningMovesTopRightBottomLeftDiagonal_O)
  });

 it(("should display draw message when all tiles are marked and no player wins"), () => {
    const { MATCH_DRAW_MESSAGE } = TestConstants;
    const drawPositions = [0,1,2,3,6,4,5,8,7]
    drawPositions.forEach((position) => {
      fireEvent.click(tiles[position]);
    });
    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent(`${MATCH_DRAW_MESSAGE}`);
  });
  
});

