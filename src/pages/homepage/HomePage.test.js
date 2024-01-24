import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("navbar with all proper links and label is rendered",()=>{
    render(<HomePage />);

    //label rendered test
    const Home =screen.getByText("Home")
    const About= screen.getByText("About")
    const Reservations= screen.getByText("Reservations")

    //is an anchor tag that is link with href to the specified
    expect(Home).toHaveAttribute('href', '/home')
    expect(About).toHaveAttribute('href', '/about')
    expect(Reservations).toHaveAttribute('href', '/reservations')

});