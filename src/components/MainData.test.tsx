import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../App";
import MainData from "./MainData";

let data: WeatherData | null;

describe("Other data", () => {
  it("renders name", () => {
    render(<MainData data={data} />);
    const name = screen.getByTestId("name");
    expect(name).toBeVisible();
  });

  it("should render data", () => {
    const data: WeatherData = {
      main: {
        pressure: 1013,
        temp: 20,
        temp_max: 25,
      },
      name: "London",
      weather: [
        {
          description: "overcast clouds",
        },
      ],
      wind: {
        speed: 10,
      },
    };

    const { getByTestId } = render(<MainData data={data} />);
    expect(getByTestId("name")).toBeInTheDocument();
  });
});
