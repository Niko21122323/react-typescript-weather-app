import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

// Checks if the input is visible on the screen
describe("App Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });

  it("renders the input", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("renders the input", async () => {
    render(<App />);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "skopje" } });
    fireEvent.keyDown(input, { key: "Enter" });

    await waitFor(() => {
      const mainData = screen.getByTestId("main-data");
      const otherData = screen.getByTestId("other-data");
      expect(mainData).toBeVisible();
      expect(otherData).toBeVisible();
    });
  });
});
