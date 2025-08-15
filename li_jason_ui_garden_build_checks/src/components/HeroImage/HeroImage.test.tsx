import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

describe("HeroImage", () => {
  test("renders hero image with title and subtitle", () => {
    render(
      <HeroImage
        src="https://example.com/hero.jpg"
        alt="Hero image"
        title="Test Title"
        subtitle="Test Subtitle"
      />,
    );

    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByText("Test Title")).toBeVisible();
    expect(screen.getByText("Test Subtitle")).toBeVisible();
  });

  test("applies disabled styles when disabled", () => {
    render(
      <HeroImage
        src="https://example.com/hero.jpg"
        alt="Disabled hero"
        title="Disabled Hero"
        disabled={true}
      />,
    );

    const container = screen
      .getByText("Disabled Hero")
      .closest("div")?.parentElement;
    expect(container).toHaveStyle("opacity: 0.6");
    expect(container).toHaveStyle("cursor: not-allowed");
    expect(container).toHaveStyle("filter: grayscale(0.3)");
  });

  // test('renders without overlay when overlay is false', () => {
  //   render(
  //     <HeroImage
  //       src="https://example.com/hero.jpg"
  //       alt="No overlay hero"
  //       title="No Overlay"
  //       overlay={false}
  //     />
  //   );

  //   // The overlay div should not be present
  //   const overlayDiv = screen.getByRole('img').parentElement?.querySelector('div[style*="position: absolute"]');
  //   expect(overlayDiv).toBeFalsy();
  // });

  // test('applies custom height', () => {
  //   render(
  //     <HeroImage
  //       src="https://example.com/hero.jpg"
  //       alt="Custom height hero"
  //       title="Custom Height"
  //       height="500px"
  //     />
  //   );

  //   const container = screen.getByText('Custom Height').closest('div')?.parentElement;
  //   expect(container).toHaveStyle('height: 500px');
  // });

  // test('calls onClick when clicked and not disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <HeroImage
  //       src="https://example.com/hero.jpg"
  //       alt="Clickable hero"
  //       title="Clickable Hero"
  //       onClick={mockOnClick}
  //     />
  //   );

  //   const container = screen.getByText('Clickable Hero').closest('div')?.parentElement;
  //   container?.click();

  //   expect(mockOnClick).toHaveBeenCalledTimes(1);
  // });

  // test('does not call onClick when disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <HeroImage
  //       src="https://example.com/hero.jpg"
  //       alt="Disabled clickable hero"
  //       title="Disabled Clickable"
  //       onClick={mockOnClick}
  //       disabled={true}
  //     />
  //   );

  //   const container = screen.getByText('Disabled Clickable').closest('div')?.parentElement;
  //   container?.click();

  //   expect(mockOnClick).not.toHaveBeenCalled();
  // });

  // test('renders children content', () => {
  //   render(
  //     <HeroImage
  //       src="https://example.com/hero.jpg"
  //       alt="Hero with children"
  //     >
  //       <button>Custom Button</button>
  //     </HeroImage>
  //   );

  //   expect(screen.getByRole('button', { name: 'Custom Button' })).toBeInTheDocument();
  // });
});
