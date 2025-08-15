import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card", () => {
  test("renders card with title, subtitle, and content", () => {
    render(
      <Card
        title="Test Title"
        subtitle="Test Subtitle"
        content="Test content"
      />,
    );

    expect(screen.getByText("Test Title")).toBeVisible();
    expect(screen.getByText("Test Subtitle")).toBeVisible();
    expect(screen.getByText("Test content")).toBeVisible();
  });

  test("applies disabled styles when disabled", () => {
    render(<Card title="Disabled Card" disabled={true} />);

    const card = screen.getByText("Disabled Card").closest("div");
    expect(card).toHaveStyle("background-color: #ffffff");
    expect(card).toHaveStyle("opacity: 0.6");
    expect(card).toHaveStyle("cursor: not-allowed");
  });

  // test('renders image when imageSrc is provided', () => {
  //   render(
  //     <Card
  //       title="Card with Image"
  //       imageSrc="https://example.com/image.jpg"
  //       imageAlt="Test image"
  //     />
  //   );

  //   const image = screen.getByRole('img');
  //   expect(image).toBeInTheDocument();
  //   expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  //   expect(image).toHaveAttribute('alt', 'Test image');
  // });

  // test('applies outlined variant styles', () => {
  //   render(
  //     <Card
  //       title="Outlined Card"
  //       variant="outlined"
  //     />
  //   );

  //   const card = screen.getByText('Outlined Card').closest('div');
  //   expect(card).toHaveStyle('border: 1px solid #e0e0e0');
  //   expect(card).toHaveStyle('box-shadow: none');
  // });

  // test('applies elevated variant styles', () => {
  //   render(
  //     <Card
  //       title="Elevated Card"
  //       variant="elevated"
  //     />
  //   );

  //   const card = screen.getByText('Elevated Card').closest('div');
  //   expect(card).toHaveStyle('border: none');
  //   expect(card).toHaveStyle('box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),0 1px 3px rgba(0, 0, 0, 0.08)');
  // });

  // test('calls onClick when clicked and not disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <Card
  //       title="Clickable Card"
  //       onClick={mockOnClick}
  //     />
  //   );

  //   const card = screen.getByText('Clickable Card').closest('div');
  //   card?.click();

  //   expect(mockOnClick).toHaveBeenCalledTimes(1);
  // });

  // test('does not call onClick when disabled', () => {
  //   const mockOnClick = jest.fn();
  //   render(
  //     <Card
  //       title="Disabled Clickable Card"
  //       onClick={mockOnClick}
  //       disabled={true}
  //     />
  //   );

  //   const card = screen.getByText('Disabled Clickable Card').closest('div');
  //   card?.click();

  //   expect(mockOnClick).not.toHaveBeenCalled();
  // });

  // test('renders custom children content', () => {
  //   render(
  //     <Card title="Card with Children">
  //       <div data-testid="custom-content">Custom content</div>
  //     </Card>
  //   );

  //   expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  //   expect(screen.getByText('Custom content')).toBeInTheDocument();
  // });

  // test('renders footer when provided', () => {
  //   render(
  //     <Card
  //       title="Card with Footer"
  //       footer={<div data-testid="card-footer">Footer content</div>}
  //     />
  //   );

  //   expect(screen.getByTestId('card-footer')).toBeInTheDocument();
  //   expect(screen.getByText('Footer content')).toBeInTheDocument();
  // });

  // test('applies custom styling props', () => {
  //   render(
  //     <Card
  //       title="Custom Styled Card"
  //       backgroundColor="#ff0000"
  //       textColor="#ffffff"
  //       padding="2rem"
  //       borderRadius="16px"
  //     />
  //   );

  //   const card = screen.getByText('Custom Styled Card').closest('div');
  //   expect(card).toHaveStyle('background-color: #ff0000');
  //   expect(card).toHaveStyle('color: #ffffff');
  //   expect(card).toHaveStyle('padding: 2rem');
  //   expect(card).toHaveStyle('border-radius: 16px');
  // });
});
