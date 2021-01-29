import { render } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter, Route } from "react-router-dom";
jest.mock("../components/Alert", () => () => <div data-testid="alert-id" />);

describe("Login", () => {
  it("Renders component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Route
          render={() => (
            <Login
              handleChange={jest.fn()}
              handleSubmitLogin={jest.fn()}
              alertMessage="Test alert message"
              setAlertMessage={jest.fn()}
            />
          )}
        />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders elements on the page", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Route
          render={() => (
            <Login
              handleChange={jest.fn()}
              handleSubmitLogin={jest.fn()}
              alertMessage="Test alert message"
              setAlertMessage={jest.fn()}
            />
          )}
        />
      </BrowserRouter>
    );

    expect(getByTestId("username-id")).toHaveTextContent("Email or Username");
    expect(getByTestId("password-id")).toHaveTextContent("Password");
  });

  it("renders the alert message", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login
          handleChange={jest.fn()}
          handleSubmitLogin={jest.fn()}
          alertMessage="Test alert message"
          setAlertMessage={jest.fn()}
        />
      </BrowserRouter>
    );

    expect(getByTestId("alert-id")).toBeInTheDocument();
  });
});
