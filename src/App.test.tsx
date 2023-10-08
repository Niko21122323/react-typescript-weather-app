import { render } from "@testing-library/react";
import App from "./App";

// Checks if the input is visible on the screen

describe("App Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
