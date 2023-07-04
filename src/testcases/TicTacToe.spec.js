import { render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants } from "../components/constants/TestConstants";

describe("TicTacToe works fine when", () => {
 
  it("renders tictactoe component", () => {
    render(<TicTacToe/>);
    const tictactoeComponent = screen.getByTestId("tictactoe");
    expect(tictactoeComponent).toBeInTheDocument();
  });

  it("should display title", () => {
    render(<TicTacToe/>);
    const title = screen.getByTestId("header");
    expect(title).toBeInTheDocument();
  });
  
  it("should display correct title text", () => {
    render(<TicTacToe/>);
    const titleText = screen.getByTestId("header");
    expect(titleText).toHaveTextContent(TestConstants.TITLE);
  });

});

