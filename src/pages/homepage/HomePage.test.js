import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("Reserve a table button on screen visible", () => {
    render(<HomePage />);

    //reserve a table button on screen
    const ReserveTable = screen.getByText("Reserve a table");

    expect(ReserveTable).toBeInTheDocument();

});