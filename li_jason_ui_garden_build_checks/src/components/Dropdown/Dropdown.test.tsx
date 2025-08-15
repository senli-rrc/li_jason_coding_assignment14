import React from "react";
import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Dropdown component", () => {
  test("renders dropdown with options", () => {
    render(<Dropdown options={sampleOptions} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeVisible();

    // Check if options are rendered
    expect(screen.getByText("Option 1")).toBeVisible();
    expect(screen.getByText("Option 2")).toBeVisible();
    expect(screen.getByText("Option 3")).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(<Dropdown options={sampleOptions} disabled />);
  //   const selectElement = screen.getByRole('combobox');
  //   expect(selectElement).toBeDisabled();
  //   expect(selectElement).toHaveStyle('opacity: 0.6');
  //   expect(selectElement).toHaveStyle('cursor: not-allowed');
  // });

  test("changes background color when disabled", () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveStyle("background-color: #e9ecef");
  });

  // test('applies custom background color', () => {
  //   render(<Dropdown options={sampleOptions} backgroundColor="#ff0000" />);
  //   const selectElement = screen.getByRole('combobox');
  //   expect(selectElement).toHaveStyle('background-color: #ff0000');
  // });

  // test('handles value change', () => {
  //   const handleChange = jest.fn();
  //   render(<Dropdown options={sampleOptions} onChange={handleChange} />);

  //   const selectElement = screen.getByRole('combobox');
  //   fireEvent.change(selectElement, { target: { value: 'option2' } });

  //   expect(handleChange).toHaveBeenCalledWith('option2');
  // });

  // test('shows placeholder text', () => {
  //   render(<Dropdown options={sampleOptions} placeholder="Choose option" />);
  //   expect(screen.getByText('Choose option')).toBeInTheDocument();
  // });
});
