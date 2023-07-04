import { render, screen } from "@testing-library/react";
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

});

