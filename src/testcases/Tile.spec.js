import { render, screen } from "@testing-library/react";
import Tile from "../components/Tile";

describe(("Tile component works fine when"), () => {

  it("should render tile component", () => {
    render(<Tile tileTestId="tile"/>)
    const tileComponent = screen.getByTestId("tile");
    expect(tileComponent).toBeInTheDocument();
  });

});