import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import { TestConstants } from "../components/constants/TestConstants";

describe(("Board component works fine when"), () => {

    it("renders 3X3 board", () => {
        render(<Board tiles={Array(TestConstants.NO_OF_TILES_IN_THE_BOARD).fill(TestConstants.EMPTY)}/>)
        const tiles = screen.getAllByTestId("tile");
        expect(tiles).toHaveLength(TestConstants.NO_OF_TILES_IN_THE_BOARD);
    });

    it("should have tiles with empty values initially", () => {
        render(<Board tiles={Array(TestConstants.NO_OF_TILES_IN_THE_BOARD).fill(TestConstants.EMPTY)}/>)
        const tiles = screen.getAllByTestId("tile");
        tiles.forEach((tile) => {
            expect(tile.textContent).toBe(TestConstants.EMPTY);
        }); 
    });

});