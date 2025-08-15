import React from "react";
import styled, { css } from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return css`
        padding: 0.25rem 2rem 0.25rem 0.5rem;
        font-size: 0.875rem;
        min-height: 1.875rem;
      `;
    case "large":
      return css`
        padding: 0.75rem 2.5rem 0.75rem 1rem;
        font-size: 1.125rem;
        min-height: 3rem;
      `;
    default:
      return css`
        padding: 0.5rem 2.25rem 0.5rem 0.75rem;
        font-size: 1rem;
        min-height: 2.375rem;
      `;
  }
};

interface StyledSelectProps {
  $size?: string;
  $disabled?: boolean;
  $backgroundColor?: string;
  $color?: string;
  $borderColor?: string;
  $error?: boolean;
  $fullWidth?: boolean;
}

const StyledSelect = styled.select<StyledSelectProps>`
  display: block;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #111827;
  cursor: pointer;
  line-height: 1.5;
  transition: all 0.15s ease-in-out;
  appearance: none;

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

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border-color: ${$borderColor} !important;
    `}

  ${({ $error }) =>
    $error &&
    css`
      border-color: #dc3545 !important;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    `}

  &:focus {
    outline: 0;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #e9ecef !important;
    opacity: 0.6;
    cursor: not-allowed;
    color: #6c757d !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 2rem 0.75rem 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    padding: 0.875rem 2rem 0.875rem 0.875rem;
  }
`;

const StyledOption = styled.option`
  &:disabled {
    color: #6c757d;
    background-color: #f8f9fa;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = "Select an option",
  size = "medium",
  disabled = false,
  backgroundColor,
  color,
  borderColor,
  multiple = false,
  onChange,
  error = false,
  fullWidth = false,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = multiple
      ? Array.from(event.target.selectedOptions, (option) => option.value)
      : event.target.value;

    onChange?.(newValue);
  };

  return (
    <StyledSelect
      value={multiple ? undefined : (value as string)}
      onChange={handleChange}
      $size={size}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      $borderColor={borderColor}
      multiple={multiple}
      $error={error}
      $fullWidth={fullWidth}
      {...props}
    >
      {!multiple && placeholder && (
        <StyledOption value="" disabled>
          {placeholder}
        </StyledOption>
      )}
      {options.map((option) => (
        <StyledOption
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
