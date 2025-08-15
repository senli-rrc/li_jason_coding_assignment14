import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  test("renders button and is visible", () => {
    render(<Button title="Test Button" />);
    const buttonElement = screen.getByText(/test button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(<Button title="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/disabled button/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle("background-color: #6c757d");
    expect(buttonElement).toHaveStyle("cursor: not-allowed");
    expect(buttonElement).toHaveStyle("opacity: 0.65");
  });

  // test('applies custom background color when not disabled', () => {
  //   render(<Button title="Custom Button" backgroundColor="#ff0000" />);
  //   const buttonElement = screen.getByText(/custom button/i);
  //   expect(buttonElement).toHaveStyle('background-color: #ff0000');
  // });

  // test('calls onClick when clicked and not disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(<Button title="Clickable Button" onClick={mockOnClick} />);
  //   const buttonElement = screen.getByText(/clickable button/i);

  //   fireEvent.click(buttonElement);
  //   expect(mockOnClick).toHaveBeenCalledTimes(1);
  // });

  // test('does not call onClick when disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(<Button title="Disabled Button" disabled onClick={mockOnClick} />);
  //   const buttonElement = screen.getByText(/disabled button/i);

  //   fireEvent.click(buttonElement);
  //   expect(mockOnClick).not.toHaveBeenCalled();
  // });

  // test('has proper accessibility attributes', () => {
  //   render(<Button title="Accessible Button" />);
  //   const buttonElement = screen.getByText(/accessible button/i);
  //   expect(buttonElement).toHaveAttribute('aria-label', 'Accessible Button');
  // });
});
