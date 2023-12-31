import { screen, render, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import { WeatherData } from "../App";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import axios from "axios";

const location: string = "skopje";
let setLocation: (location: string) => void;
let setData: (data: WeatherData) => void;
describe("input testing", () => {
  // is the input field visible
  it("is input visible", () => {
    const { getByRole } = render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );
    const input = getByRole("textbox");
    expect(input).toBeVisible();
  });

  it("should have an input", async () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const inputVar = screen.getByTestId("input");
    expect(inputVar).toBeInTheDocument();
  });
  // Testing input return
  it("testing the input", async () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "skopje" },
    });

    const inputVarValue = screen.getByTestId("input");
    expect(inputVarValue).toHaveValue("skopje");
  });

  // Check if calss existsg
  it("should have class", () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const checkClass = screen.getByRole("textbox");
    expect(checkClass).toHaveAttribute("class");
  });

  // Has attrubute value
  it("should have value", () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const checkClass = screen.getByRole("textbox");
    expect(checkClass).toHaveAttribute("value");
  });

  // Has attribute placeholder
  it("should have placeholder", () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const checkClass = screen.getByRole("textbox");
    expect(checkClass).toHaveAttribute("placeholder");
  });

  //  Does not have argument 'id'
  it("should't have id", () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const checkClass = screen.getByRole("textbox");
    expect(checkClass).not.toHaveAttribute("id");
  });

  it("show name", () => {
    render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );

    const inputBox = screen.getByRole("textbox");
    userEvent.type(inputBox, "skopje");
    expect(inputBox).toHaveValue("skopje");
  });

  it("mock api", async () => {
    const axiosMock = vi.spyOn(axios, "get");
    axiosMock.mockResolvedValueOnce({
      data: {
        name: "Skopje",
        main: {
          temp: 20,
          temp_max: 20,
          temp_min: 20,
          pressure: 20,
        },
        weather: [{ description: "Cloudy" }],
        wind: {
          speed: 20,
        },
      },
    });

    const setData = vi.fn();
    const setLocation = vi.fn();

    const { getByTestId } = render(
      <Input location={location} setLocation={setLocation} setData={setData} />
    );
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { key: "Enter" });
    fireEvent.keyDown(inputElement, { key: "Enter" });

    await axiosMock.mock.results[0].value;

    expect(axiosMock).toHaveBeenCalled();

    // expect(setData).toHaveBeenCalled();
    expect(setLocation).toHaveBeenCalledWith("");
  });
});
