import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text component", () => {
  test("renders text content", () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText(/test text/i);
    expect(textElement).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(<Text disabled>Disabled Text</Text>);
  //   const textElement = screen.getByText(/disabled text/i);
  //   expect(textElement).toHaveStyle('opacity: 0.6');
  //   expect(textElement).toHaveStyle('cursor: not-allowed');
  // });

  test("changes background color when disabled", () => {
    render(<Text disabled>Disabled Text</Text>);
    const textElement = screen.getByText(/disabled text/i);
    expect(textElement).toHaveStyle("background-color: rgba(0, 0, 0, 0)");
  });

  // test('applies custom color', () => {
  //   render(<Text color="#ff0000">Custom Text</Text>);
  //   const textElement = screen.getByText(/custom text/i);
  //   expect(textElement).toHaveStyle('color: #ff0000');
  // });

  // test('applies custom background color', () => {
  //   render(<Text backgroundColor="#f0f0f0">Background Text</Text>);
  //   const textElement = screen.getByText(/background text/i);
  //   expect(textElement).toHaveStyle('background-color: #f0f0f0');
  // });

  // test('renders as different HTML elements', () => {
  //   const { rerender } = render(<Text as="h1">Heading</Text>);
  //   expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

  //   rerender(<Text as="span">Span text</Text>);
  //   expect(screen.getByText(/span text/i).tagName).toBe('SPAN');
  // });
});
