import { Constants } from "./constants/Constants";
import "../styles/Status.css";

const Status = ({player}) => {

    const {
        NEXT_PLAYER_TURN_MESSAGE
    } = Constants;

    return (
        <div data-testid="status" className="status">
            {
                (() => {
                        return `${NEXT_PLAYER_TURN_MESSAGE}  ${player}`;
                })()
            }
        </div>
    );
};

export default Status;