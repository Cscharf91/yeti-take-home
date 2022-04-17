import Menu from "./Menu";
import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";

describe('Menu Component', () => { 
  it('should render with the show-menu toggled off', () => {
    render(<Menu />);
    const list = screen.getByRole('list')
    expect(list.classList.contains("show-menu")).toBeFalsy();
  });

  it('should toggle the show-menu class on when the menu is clicked on', () => {
    render(<Menu />);
    const menu = screen.getByTestId('menu');
    const list = screen.getByRole('list')
    click(menu);
    expect(list.classList.contains("show-menu")).toBeTruthy();
  });
 });