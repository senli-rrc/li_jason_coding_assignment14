import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  test("renders radio button with label", () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Option 1"
        onChange={() => {}}
      />,
    );

    expect(screen.getByText("Option 1")).toBeVisible();
    expect(screen.getByRole("radio")).toBeVisible();
  });

  test("applies disabled styles when disabled", () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Disabled Option"
        disabled={true}
        onChange={() => {}}
      />,
    );

    const radioButton = screen.getByRole("radio");
    const label = screen.getByText("Disabled Option");

    expect(radioButton).toBeDisabled();
    expect(label).toHaveStyle("background-color: rgba(0, 0, 0, 0)");
    expect(radioButton).toHaveStyle("cursor: not-allowed");
  });

  // test('calls onChange when clicked', () => {
  //   const mockOnChange = jest.fn();
  //   render(
  //     <RadioButton
  //       name="test"
  //       value="option1"
  //       label="Clickable Option"
  //       onChange={mockOnChange}
  //     />
  //   );

  //   const radioButton = screen.getByRole('radio');
  //   radioButton.click();

  //   expect(mockOnChange).toHaveBeenCalledWith('option1');
  // });

  // test('is checked when checked prop is true', () => {
  //   render(
  //     <RadioButton
  //       name="test"
  //       value="option1"
  //       label="Checked Option"
  //       checked={true}
  //       onChange={() => {}}
  //     />
  //   );

  //   const radioButton = screen.getByRole('radio');
  //   expect(radioButton).toBeChecked();
  // });

  // test('is not checked when checked prop is false', () => {
  //   render(
  //     <RadioButton
  //       name="test"
  //       value="option1"
  //       label="Unchecked Option"
  //       checked={false}
  //       onChange={() => {}}
  //     />
  //   );

  //   const radioButton = screen.getByRole('radio');
  //   expect(radioButton).not.toBeChecked();
  // });
});
