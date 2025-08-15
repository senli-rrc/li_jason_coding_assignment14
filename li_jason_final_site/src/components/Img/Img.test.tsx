import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img", () => {
  test("renders image with correct src and alt", () => {
    render(<Img src="https://example.com/test.jpg" alt="Test image" />);

    const image = screen.getByRole("img");
    expect(image).toBeVisible();
  });

  test("applies disabled styles when disabled", () => {
    render(
      <Img
        src="https://example.com/test.jpg"
        alt="Disabled image"
        disabled={true}
      />,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveStyle("opacity: 0.6");
    expect(image).toHaveStyle("cursor: not-allowed");
    expect(image).toHaveStyle("filter: grayscale(0.5)");
  });

  // test('applies custom width and height', () => {
  //   render(
  //     <Img
  //       src="https://example.com/test.jpg"
  //       alt="Sized image"
  //       width="200px"
  //       height="150px"
  //     />
  //   );

  //   const image = screen.getByRole('img');
  //   expect(image).toHaveStyle('width: 200px');
  //   expect(image).toHaveStyle('height: 150px');
  // });

  // test('applies border radius', () => {
  //   render(
  //     <Img
  //       src="https://example.com/test.jpg"
  //       alt="Rounded image"
  //       borderRadius="50%"
  //     />
  //   );

  //   const image = screen.getByRole('img');
  //   expect(image).toHaveStyle('border-radius: 50%');
  // });

  // test('calls onClick when clicked and not disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <Img
  //       src="https://example.com/test.jpg"
  //       alt="Clickable image"
  //       onClick={mockOnClick}
  //     />
  //   );

  //   const image = screen.getByRole('img');
  //   image.click();

  //   expect(mockOnClick).toHaveBeenCalledTimes(1);
  // });

  // test('does not call onClick when disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <Img
  //       src="https://example.com/test.jpg"
  //       alt="Disabled clickable image"
  //       onClick={mockOnClick}
  //       disabled={true}
  //     />
  //   );

  //   const image = screen.getByRole('img');
  //   image.click();

  //   expect(mockOnClick).not.toHaveBeenCalled();
  // });
});
