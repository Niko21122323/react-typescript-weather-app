import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../App";
import OtherData from "./OtherData";

let data: WeatherData | null;

describe("OtherData.tsx testing", () => {
  it("renders correctly", () => {
    const { getByText } = render(<OtherData data={data} />);
    const input = getByText(/max temp/i);
    expect(input).toBeVisible();
  });

  it("renders correctly", () => {
    const { getByText } = render(<OtherData data={data} />);
    const input = getByText(/pressure/i);
    expect(input).toBeVisible();
  });

  it("renders correctly", () => {
    const { getByText } = render(<OtherData data={data} />);
    const input = getByText(/wind speed/i);
    expect(input).toBeVisible();
  });

  it("should render the data", () => {
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

    const { getByText } = render(<OtherData data={data} />);

    expect(getByText("1013%")).toBeInTheDocument();
  });
});
