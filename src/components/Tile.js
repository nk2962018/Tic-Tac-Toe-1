import "../styles/Tile.css";

const Tile = ({value, tileTestId, onClick}) => {
    return(
        <button className="tile" data-testid={tileTestId} onClick={onClick}>
            {value}
        </button>
    );

}

export default Tile;