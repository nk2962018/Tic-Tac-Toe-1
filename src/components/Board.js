import Tile from "./Tile";
import "../styles/Board.css";

const Board = ({boardTestId, tiles, onClick}) => {
    return(
        <div className="board" data-testid={boardTestId}>
           {
            tiles.map((tile,position) => (
                <Tile value={tile} tileTestId='tile' key={position} onClick={() => onClick(position)}/>
            ))
           }
        </div>
    );
}

export default Board;