import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

interface StyledCardProps {
  $disabled?: boolean;
  $hasOnClick?: boolean;
  $variant?: "default" | "outlined" | "elevated";
  $padding?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $textColor?: string;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: ${(props) => props.$padding || "1rem"};
  border-radius: ${(props) => props.$borderRadius || "8px"};
  background-color: ${(props) => props.$backgroundColor || "#ffffff"};
  color: ${(props) => props.$textColor || "#333333"};
  cursor: ${(props) =>
    props.$disabled
      ? "not-allowed"
      : props.$hasOnClick
        ? "pointer"
        : "default"};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return `
          border: 1px solid #e0e0e0;
          box-shadow: none;
        `;
      case "elevated":
        return `
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        `;
      default:
        return `
          border: 1px solid #f0f0f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        `;
    }
  }}

  &:hover {
    ${(props) =>
      !props.$disabled &&
      props.$hasOnClick &&
      `
      transform: translateY(-2px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);
    `}
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: ${(props) => props.$padding || "0.875rem"};
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.$padding || "0.75rem"};
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  color: #666666;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const CardContent = styled.div`
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #555555;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  disabled = false,
  variant = "default",
  padding,
  borderRadius,
  backgroundColor,
  textColor,
  className,
  onClick,
  children,
  footer,
  header,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledCard
      $disabled={disabled}
      $hasOnClick={!!onClick}
      $variant={variant}
      $padding={padding}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {header && <CardHeader>{header}</CardHeader>}

      {imageSrc && <CardImage src={imageSrc} alt={imageAlt || "Card image"} />}

      {title && <CardTitle>{title}</CardTitle>}

      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}

      {(content || children) && (
        <CardContent>
          {content && <p>{content}</p>}
          {children}
        </CardContent>
      )}

      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};
