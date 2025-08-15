import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from "./Table.types";

// Re-export components from their individual folders
export { TableHeader } from "./TableHeader";
export { TableRow } from "./TableRow";
export { TableCell } from "./TableCell";
export { TableFooter } from "./TableFooter";

// Table Styles
const getTableVariantStyles = (variant: string) => {
  switch (variant) {
    case "striped":
      return css`
        tbody tr:nth-of-type(odd) {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `;
    case "bordered":
      return css`
        border: 1px solid #dee2e6;
        th,
        td {
          border: 1px solid #dee2e6;
        }
      `;
    case "hover":
      return css`
        tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.075);
        }
      `;
    default:
      return css``;
  }
};

const getTableSizeStyles = (size: string) => {
  switch (size) {
    case "sm":
      return css`
        th,
        td {
          padding: 0.3rem;
          font-size: 0.875rem;
        }
      `;
    case "lg":
      return css`
        th,
        td {
          padding: 0.75rem;
          font-size: 1.125rem;
        }
      `;
    default:
      return css`
        th,
        td {
          padding: 0.5rem;
          font-size: 1rem;
        }
      `;
  }
};

const StyledTable = styled.table<{
  $variant?: string;
  $size?: string;
  $disabled?: boolean;
  $backgroundColor?: string;
  $borderColor?: string;
  $responsive?: boolean;
}>`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;

  ${({ $variant = "default" }) => getTableVariantStyles($variant)}
  ${({ $size = "md" }) => getTableSizeStyles($size)}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border-color: ${$borderColor};
      th,
      td {
        border-color: ${$borderColor};
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
      cursor: not-allowed;
      background-color: #f8f9fa;
    `}

  ${({ $responsive }) =>
    $responsive &&
    css`
      @media (max-width: 768px) {
        font-size: 0.875rem;

        th,
        td {
          padding: 0.25rem;
        }
      }

      @media (max-width: 576px) {
        display: block;
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
      }
    `}
`;

// Main Table Component
export const Table: React.FC<TableProps> = ({
  children,
  variant = "default",
  size = "md",
  disabled = false,
  backgroundColor,
  borderColor,
  responsive = false,
  ...props
}) => {
  const TableWrapper = responsive
    ? styled.div`
        overflow-x: auto;
        @media (max-width: 768px) {
          -webkit-overflow-scrolling: touch;
        }
      `
    : React.Fragment;

  const tableElement = (
    <StyledTable
      $variant={variant}
      $size={size}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $responsive={responsive}
      {...props}
    >
      {children}
    </StyledTable>
  );

  return responsive ? (
    <TableWrapper>{tableElement}</TableWrapper>
  ) : (
    tableElement
  );
};
