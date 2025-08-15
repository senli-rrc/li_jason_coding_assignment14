import React from "react";
import styled, { css } from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledTableHeader = styled.thead<{
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

  th {
    font-weight: 600;
    border-bottom: 2px solid #dee2e6;
    background-color: #f8f9fa;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    th {
      padding: 0.25rem;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    th {
      padding: 0.125rem;
      font-size: 0.75rem;
    }
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
  ...props
}) => {
  return (
    <StyledTableHeader
      $backgroundColor={backgroundColor}
      $color={color}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
