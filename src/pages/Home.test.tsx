import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  test("renders 'About' section", () => {
    render(<Home />);
    const linkElement = screen.getByRole('heading', {
      name: /about/i
    })
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Our Vision' section", () => {
    render(<Home />);
    const linkElement = screen.getByRole('heading', {
      name: /our vision/i
    })
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 'Our Values' section", () => {
    render(<Home />);
    const linkElement = screen.getByRole('heading', {
      name: /our values/i
    })
    expect(linkElement).toBeInTheDocument();
  });
});
