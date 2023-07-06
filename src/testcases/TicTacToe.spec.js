import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants } from "../components/constants/TestConstants";

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

  it(("displays winning message for X when it marks all the first row winning positions"), () => {
    const {PLAYER_X, DECLARE_WINNER_MESSAGE } = TestConstants;
    const winningPositions = [0,3,1,6,2];
    const winner = PLAYER_X;
    winningPositions.forEach((position) => {
        fireEvent.click(tiles[position])
    })
    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent(`${DECLARE_WINNER_MESSAGE}${winner}`)
  });

  it(("displays winning message for O when it marks all the first row winning positions"), () => {
    const {PLAYER_O, DECLARE_WINNER_MESSAGE } = TestConstants;
    const winningPositions = [3,0,6,1,4,2];
    const winner = PLAYER_O;
    winningPositions.forEach((position) => {
        fireEvent.click(tiles[position])
    })
    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent(`${DECLARE_WINNER_MESSAGE}${winner}`)
  });

});

