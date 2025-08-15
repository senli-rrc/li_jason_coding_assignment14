import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

interface StyledButtonProps {
  $backgroundColor?: string;
  $disabled?: boolean;
  // test6
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#007bff"};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px; /* Responsive touch target */

  /* Responsive design */
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    min-height: 40px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
    min-height: 36px;
  }

  &:hover:not(:disabled) {
    background-color: ${({ $backgroundColor }) => {
      const color = $backgroundColor || "#007bff";
      return color === "#007bff" ? "#0056b3" : color;
    }};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #6c757d !important;
    opacity: 0.65;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  title = "Button",
  onClick,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      aria-label={title}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
