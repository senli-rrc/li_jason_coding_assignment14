import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label component", () => {
  test("renders label with text", () => {
    render(<Label>Test Label</Label>);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(<Label disabled>Disabled Label</Label>);
  //   const labelElement = screen.getByText(/disabled label/i);
  //   expect(labelElement).toHaveStyle('opacity: 0.6');
  //   expect(labelElement).toHaveStyle('cursor: not-allowed');
  //   expect(labelElement).toHaveStyle('background-color: #6c757d');
  // });

  test("changes background color when disabled", () => {
    render(<Label disabled>Disabled Label</Label>);
    const labelElement = screen.getByText(/disabled label/i);
    expect(labelElement).toHaveStyle("background-color: #6c757d");
  });

  // test('applies custom background color', () => {
  //   render(<Label backgroundColor="#ff0000">Custom Label</Label>);
  //   const labelElement = screen.getByText(/custom label/i);
  //   expect(labelElement).toHaveStyle('background-color: #ff0000');
  // });

  // test('applies primary variant styles', () => {
  //   render(<Label variant="primary">Primary Label</Label>);
  //   const labelElement = screen.getByText(/primary label/i);
  //   expect(labelElement).toHaveStyle('background-color: #007bff');
  // });

  // test('applies success variant styles', () => {
  //   render(<Label variant="success">Success Label</Label>);
  //   const labelElement = screen.getByText(/success label/i);
  //   expect(labelElement).toHaveStyle('background-color: #28a745');
  // });
});
