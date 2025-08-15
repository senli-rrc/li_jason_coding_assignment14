import React from "react";
import styled, { css } from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return css`
        width: 1rem;
        height: 1rem;

        &::after {
          width: 0.375rem;
          height: 0.375rem;
          top: 0.25rem;
          left: 0.25rem;
        }
      `;
    case "large":
      return css`
        width: 1.5rem;
        height: 1.5rem;

        &::after {
          width: 0.75rem;
          height: 0.75rem;
          top: 0.3125rem;
          left: 0.3125rem;
        }
      `;
    default:
      return css`
        width: 1.25rem;
        height: 1.25rem;

        &::after {
          width: 0.5rem;
          height: 0.5rem;
          top: 0.3125rem;
          left: 0.3125rem;
        }
      `;
  }
};

const getLabelSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return css`
        font-size: 0.875rem;
        margin-left: 0.5rem;
      `;
    case "large":
      return css`
        font-size: 1.125rem;
        margin-left: 0.75rem;
      `;
    default:
      return css`
        font-size: 1rem;
        margin-left: 0.625rem;
      `;
  }
};

interface StyledRadioProps {
  $size?: string;
  $color?: string;
  $checkedColor?: string;
  $disabled?: boolean;
}

const StyledRadioWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  transition: opacity 0.15s ease-in-out;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const StyledRadioInput = styled.input<StyledRadioProps>`
  appearance: none;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  transition: all 0.15s ease-in-out;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  ${({ $size = "medium" }) => getSizeStyles($size)}

  ${({ $color }) =>
    $color &&
    css`
      border-color: ${$color};
    `}

  &:checked {
    border-color: ${({ $checkedColor }) => $checkedColor || "#007bff"};
    background-color: ${({ $checkedColor }) => $checkedColor || "#007bff"};
  }

  &:checked::after {
    content: "";
    display: block;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    transform: scale(1);
    transition: transform 0.15s ease-in-out;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #e9ecef;
    border-color: #6c757d;
    cursor: not-allowed;

    &:checked {
      background-color: #6c757d;
      border-color: #6c757d;
    }
  }

  @media (max-width: 768px) {
    ${({ $size = "medium" }) =>
      $size === "small" ? getSizeStyles("medium") : getSizeStyles($size)}
  }

  @media (max-width: 480px) {
    ${getSizeStyles("medium")}
  }
`;

const StyledLabel = styled.span<{ $size?: string; $disabled?: boolean }>`
  color: ${({ $disabled }) => ($disabled ? "#6c757d" : "#212529")};
  user-select: none;

  ${({ $size = "medium" }) => getLabelSizeStyles($size)}

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0.625rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-left: 0.625rem;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked = false,
  disabled = false,
  size = "medium",
  color,
  checkedColor,
  onChange,
  children,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <StyledRadioWrapper $disabled={disabled}>
      <StyledRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        $size={size}
        $color={color}
        $checkedColor={checkedColor}
        $disabled={disabled}
        {...props}
      />
      {(label || children) && (
        <StyledLabel $size={size} $disabled={disabled}>
          {children || label}
        </StyledLabel>
      )}
    </StyledRadioWrapper>
  );
};
