import "../styles/Tile.css";

const Tile = ({value,tileTestId}) => {
    return(
        <button className="tile" data-testid={tileTestId}>
            {value}
        </button>
    );

}

export default Tile;