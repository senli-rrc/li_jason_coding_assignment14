import React from "react";
import styled, { css } from "styled-components";
import { TableRowProps } from "./TableRow.types";

const getRowVariantStyles = (variant: string) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: #b3d7ff;
      `;
    case "secondary":
      return css`
        background-color: #d1d3d4;
      `;
    case "success":
      return css`
        background-color: #c3e6cb;
      `;
    case "danger":
      return css`
        background-color: #f5c6cb;
      `;
    case "warning":
      return css`
        background-color: #ffeaa7;
      `;
    case "info":
      return css`
        background-color: #bee5eb;
      `;
    default:
      return css``;
  }
};

const StyledTableRow = styled.tr<{
  $variant?: string;
  $disabled?: boolean;
  $backgroundColor?: string;
  $hover?: boolean;
  $onClick?: () => void;
}>`
  ${({ $variant = "default" }) => getRowVariantStyles($variant)}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor} !important;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: #f8f9fa !important;
      color: #6c757d;
    `}

  ${({ $hover, $onClick }) =>
    ($hover || $onClick) &&
    css`
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;

      &:hover:not([data-disabled="true"]) {
        background-color: rgba(0, 0, 0, 0.075);
      }
    `}

  /* Responsive design */
  @media (max-width: 768px) {
    td,
    th {
      padding: 0.25rem;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    td,
    th {
      padding: 0.125rem;
      font-size: 0.75rem;
    }
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  variant = "default",
  disabled = false,
  backgroundColor,
  onClick,
  hover = false,
  ...props
}) => {
  return (
    <StyledTableRow
      $variant={variant}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $onClick={onClick}
      $hover={hover}
      onClick={disabled ? undefined : onClick}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
