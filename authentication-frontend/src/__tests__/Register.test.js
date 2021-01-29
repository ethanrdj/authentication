import { render } from "@testing-library/react";
import Register from "../components/Register";
import { BrowserRouter } from "react-router-dom";

jest.mock("../components/Alert", () => () => <div data-testid="alert-id" />);

describe("Register", () => {
  it("renders the component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Register
          handleChange={jest.fn()}
          handleSubmitRegister={jest.fn()}
          alertMessage="Test alert message"
          setAlertMessage={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct elements on the page", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register
          handleChange={jest.fn()}
          handleSubmitRegister={jest.fn()}
          alertMessage="Test alert message"
          setAlertMessage={jest.fn()}
        />
      </BrowserRouter>
    );

    expect(getByTestId("reg-email-id")).toHaveTextContent("Email");
    expect(getByTestId("reg-username-id")).toHaveTextContent("Username");
    expect(getByTestId("reg-password-id")).toHaveTextContent("Password");
    expect(getByTestId("reg-confirm-id")).toHaveTextContent("Confirm Password");
  });

  it("renders the alert message", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register
          handleChange={jest.fn()}
          handleSubmitRegister={jest.fn()}
          alertMessage="Test alert message"
          setAlertMessage={jest.fn()}
        />
      </BrowserRouter>
    );

    expect(getByTestId("alert-id")).toBeInTheDocument();
  });
});
