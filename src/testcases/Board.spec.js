import { render, screen } from "@testing-library/react";
import Board from "../components/Board";

describe(("Board component works fine when"), () => {

    it("renders one tile in the board", () => {
        render(<Board/>)
        const tile = screen.getByTestId("tile");
        expect(tile).toBeInTheDocument();
    });

    it("renders one tile with value X", () => {
        render(<Board/>)
        const tileValue = screen.getByTestId("tile");
        expect(tileValue).toHaveTextContent("X");
    });

});