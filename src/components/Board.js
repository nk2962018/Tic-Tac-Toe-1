import Tile from "./Tile";
import "../styles/Board.css";

const Board = ({boardTestId, tiles}) => {
    return(
        <div className="board" data-testid={boardTestId}>
           {
            tiles.map((tile,position) => (
                <Tile value={tile} tileTestId='tile' key={position}/>
            ))
           }
        </div>
    );
}

export default Board;