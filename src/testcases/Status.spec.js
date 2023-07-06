import { render, screen } from "@testing-library/react";
import Status from "../components/Status";
import { TestConstants } from "../components/constants/TestConstants";

describe(("Status works fine when"), () =>{

    it(("displays correct message when the turn is for player X"), () => {
        const { PLAYER_X, NEXT_PLAYER_TURN_MESSAGE } = TestConstants;
        render(<Status player={PLAYER_X}/>);
        const statusPlayer_X = screen.getByTestId("status");
        expect(statusPlayer_X).toHaveTextContent(`${NEXT_PLAYER_TURN_MESSAGE}${PLAYER_X}`)
    });

    it(("displays correct message when the turn is for player O"), () => {
        const { PLAYER_O, NEXT_PLAYER_TURN_MESSAGE } = TestConstants;
        render(<Status player={PLAYER_O}/>);
        const statusPlayer_O = screen.getByTestId("status");
        expect(statusPlayer_O).toHaveTextContent(`${NEXT_PLAYER_TURN_MESSAGE}${PLAYER_O}`)
    });

});