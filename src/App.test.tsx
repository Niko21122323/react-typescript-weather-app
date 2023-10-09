import { render } from "@testing-library/react";
import App from "./App";
// import { WeatherData } from "./App";

// const apiKey = "95fc4f99d8a217a6fd2512dbf4cb68cb";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

// jest.mock(url, () => {
//   fetchWD: jest.fn(() => Promise.resolve ({
//     name: "Skopje",
//     main: {
//       temp: 20,
//       temp_max: 20,
//       temp_min: 20,
//       pressure: 20,
//     },
//     weather: [{description: "Cloudy"}],
//     wind: {
//       speed: 20,
//     },
//   }))
// })

// Checks if the input is visible on the screen
describe("App Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
