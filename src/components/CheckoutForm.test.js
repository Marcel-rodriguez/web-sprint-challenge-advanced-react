import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText('First Name:')
    userEvent.type(firstNameInput, "FirstName")
    const lastNameInput = screen.getByLabelText('Last Name:')
    userEvent.type(lastNameInput, "LastName")
    const addressInput = screen.getByLabelText('Address:')
    userEvent.type(addressInput, "123 main st")
    const cityInput = screen.getByLabelText('City:')
    userEvent.type(cityInput, "Lollypop")
    const stateInput = screen.getByLabelText('State:')
    userEvent.type(stateInput, "Neverland")
    const zipInput = screen.getByLabelText('Zip:')
    userEvent.type(zipInput, "00123")

    const submitButton = screen.getByTestId('checkout-button')
    userEvent.click(submitButton)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()

});
