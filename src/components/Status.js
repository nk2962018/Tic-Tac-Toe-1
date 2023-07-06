import { Constants } from "./constants/Constants";
import "../styles/Status.css";

const Status = ({player, winner}) => {

    const {
        NEXT_PLAYER_TURN_MESSAGE,
        DECLARE_WINNER_MESSAGE
    } = Constants;

    return (
        <div data-testid="status" className="status">
            {
                (() => {
                        if(winner) return `${DECLARE_WINNER_MESSAGE} ${winner}`
                        else return `${NEXT_PLAYER_TURN_MESSAGE} ${player}`;
                })()
            }
        </div>
    );
};

export default Status;