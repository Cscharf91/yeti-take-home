import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  test("renders 'About' section", () => {
    render(<Home />);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Our Vision' section", () => {
    render(<Home />);
    const linkElement = screen.getByText(/our vision/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Our Values' section", () => {
    render(<Home />);
    const linkElement = screen.getByText(/our values/i);
    expect(linkElement).toBeInTheDocument();
  });
});
