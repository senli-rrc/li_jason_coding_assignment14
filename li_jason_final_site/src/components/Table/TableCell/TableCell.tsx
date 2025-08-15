import React from "react";
import styled, { css } from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTableCell = styled.td<{
  $align?: string;
  $width?: string;
  $backgroundColor?: string;
  $color?: string;
  $disabled?: boolean;
}>`
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  padding: 0.5rem;

  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}

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
      background-color: #f8f9fa;
      color: #6c757d;
    `}

  /* Responsive design */
  @media (max-width: 768px) {
    padding: 0.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.125rem;
    font-size: 0.75rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  as = "td",
  align,
  width,
  backgroundColor,
  color,
  disabled = false,
  ...props
}) => {
  return (
    <StyledTableCell
      as={as}
      $align={align}
      $width={width}
      $backgroundColor={backgroundColor}
      $color={color}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
