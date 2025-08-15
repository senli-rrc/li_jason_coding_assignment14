import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

interface StyledLabelProps {
  $variant?: "default" | "primary" | "success" | "warning" | "danger";
  $size?: "small" | "medium" | "large";
  $disabled?: boolean;
  $backgroundColor?: string;
  $color?: string;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: #007bff;
        color: white;
      `;
    case "success":
      return css`
        background-color: #28a745;
        color: white;
      `;
    case "warning":
      return css`
        background-color: #ffc107;
        color: #212529;
      `;
    case "danger":
      return css`
        background-color: #dc3545;
        color: white;
      `;
    default:
      return css`
        background-color: #f8f9fa;
        color: #495057;
        border: 1px solid #dee2e6;
      `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return css`
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
      `;
    case "large":
      return css`
        padding: 0.5rem 0.75rem;
        font-size: 1.125rem;
      `;
    default:
      return css`
        padding: 0.375rem 0.625rem;
        font-size: 0.875rem;
      `;
  }
};

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  font-weight: 500;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  ${({ $variant = "default" }) => getVariantStyles($variant)}
  ${({ $size = "medium" }) => getSizeStyles($size)}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor} !important;
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color} !important;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: #6c757d !important;
      color: #fff !important;
    `}

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  children,
  variant = "default",
  size = "medium",
  disabled = false,
  backgroundColor,
  color,
  htmlFor,
  ...props
}) => {
  return (
    <StyledLabel
      $variant={variant}
      $size={size}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};
