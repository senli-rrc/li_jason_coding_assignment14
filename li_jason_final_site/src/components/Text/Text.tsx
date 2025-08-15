import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

interface StyledTextProps {
  $size?: string;
  $weight?: string;
  $color?: string;
  $backgroundColor?: string;
  $align?: string;
  $disabled?: boolean;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case "xs":
      return css`
        font-size: 0.75rem;
        line-height: 1rem;
      `;
    case "sm":
      return css`
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    case "lg":
      return css`
        font-size: 1.125rem;
        line-height: 1.75rem;
      `;
    case "xl":
      return css`
        font-size: 1.25rem;
        line-height: 1.75rem;
      `;
    case "2xl":
      return css`
        font-size: 1.5rem;
        line-height: 2rem;
      `;
    default:
      return css`
        font-size: 1rem;
        line-height: 1.5rem;
      `;
  }
};

const getWeightStyles = (weight: string) => {
  switch (weight) {
    case "light":
      return css`
        font-weight: 300;
      `;
    case "medium":
      return css`
        font-weight: 500;
      `;
    case "semibold":
      return css`
        font-weight: 600;
      `;
    case "bold":
      return css`
        font-weight: 700;
      `;
    default:
      return css`
        font-weight: 400;
      `;
  }
};

const StyledText = styled.div<StyledTextProps>`
  margin: 0;
  padding: 0;

  ${({ $size = "md" }) => getSizeStyles($size)}
  ${({ $weight = "normal" }) => getWeightStyles($weight)}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    `}

  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      color: #6c757d !important;
    `}

  @media (max-width: 768px) {
    font-size: ${({ $size }) => {
      switch ($size) {
        case "2xl":
          return "1.25rem";
        case "xl":
          return "1.125rem";
        case "lg":
          return "1rem";
        default:
          return "inherit";
      }
    }};
  }

  @media (max-width: 480px) {
    font-size: ${({ $size }) => {
      switch ($size) {
        case "2xl":
          return "1.125rem";
        case "xl":
          return "1rem";
        case "lg":
          return "0.875rem";
        default:
          return "inherit";
      }
    }};
  }
`;

export const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  size = "md",
  weight = "normal",
  color,
  backgroundColor,
  align,
  disabled = false,
  ...props
}) => {
  return (
    <StyledText
      as={as}
      $size={size}
      $weight={weight}
      $color={color}
      $backgroundColor={backgroundColor}
      $align={align}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledText>
  );
};
