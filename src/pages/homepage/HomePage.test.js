/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import userEvent from "@testing-library/user-event";

test("Reserve a table button on screen visible", () => {
    render(<HomePage />);

    //reserve a table button on screen
    const ReserveTable = screen.getByText("Reserve a table");

    expect(ReserveTable).toBeInTheDocument();

});

test("Reserve a table opens modal with cancel booking and reserving button", () => {
    render(<HomePage />);
    const ReserveTable = screen.getByText("Reserve a table");

    fireEvent.click(ReserveTable);

    const reserveTableButton = screen.getByText("Make Your reservation");

    expect(screen.getByText("Cancel Booking")).toBeInTheDocument();
    expect(reserveTableButton).toBeInTheDocument();

    expect(reserveTableButton).toHaveAttribute('type', "submit");




});

test("form validation check with error message and in appropriare color", async () => {
    render(<HomePage />);
    const ReserveTable = screen.getByText("Reserve a table");

    fireEvent.click(ReserveTable);

    const reserveTableButton = screen.getByText("Make Your reservation");


    await act(async () => {
        userEvent.click(reserveTableButton)
    })


    const requiredMsg = screen.getByText("Reservation Date is Required");
    expect(requiredMsg).toBeInTheDocument();
    expect(requiredMsg).toHaveStyle("color:red");
});