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

  it("should mark first clicked tile as X and rest tiles should remain empty", () => {
    const [firstTile, ...remainingTiles] = screen.getAllByTestId("tile");
    fireEvent.click(firstTile);
    expect(firstTile.textContent).toBe(TestConstants.PLAYER_X);
    remainingTiles.forEach((tile) => {
      expect(tile.textContent).toBe(TestConstants.EMPTY);
    });
  });

  it("should mark each tiles as X once the particualar tile is clicked", () => {
    const tiles = screen.getAllByTestId("tile");
    tiles.forEach((tile) => {
      fireEvent.click(tile);
      expect(tile.textContent).toBe(TestConstants.PLAYER_X);
    });
  });

});

