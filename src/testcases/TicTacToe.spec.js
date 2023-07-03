import { render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";


describe("TicTacToe works fine when", () => {
  
  it("renders tictactoe component", () => {
    render(<TicTacToe/>);
    const tictactoeComponent = screen.getByTestId("tictactoe");
    expect(tictactoeComponent).toBeInTheDocument();
  });

});

