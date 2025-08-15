import React from "react";
import styled, { css } from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTableFooter = styled.tfoot<{
  $backgroundColor?: string;
  $color?: string;
  $disabled?: boolean;
}>`
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: #6c757d;
      color: #fff;
    `}

  td {
    font-weight: 500;
    border-top: 2px solid #dee2e6;
    background-color: #f8f9fa;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    td {
      padding: 0.25rem;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    td {
      padding: 0.125rem;
      font-size: 0.75rem;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
  ...props
}) => {
  return (
    <StyledTableFooter
      $backgroundColor={backgroundColor}
      $color={color}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
