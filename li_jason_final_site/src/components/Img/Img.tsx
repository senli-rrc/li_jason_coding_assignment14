import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

interface StyledImgProps {
  $width?: string | number;
  $height?: string | number;
  $disabled?: boolean;
  $objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  $borderRadius?: string;
  $hasOnClick?: boolean;
}

const StyledImg = styled.img<StyledImgProps>`
  max-width: 100%;
  height: auto;
  width: ${(props) =>
    props.$width
      ? typeof props.$width === "number"
        ? `${props.$width}px`
        : props.$width
      : "auto"};
  height: ${(props) =>
    props.$height
      ? typeof props.$height === "number"
        ? `${props.$height}px`
        : props.$height
      : "auto"};
  object-fit: ${(props) => props.$objectFit || "cover"};
  border-radius: ${(props) => props.$borderRadius || "0"};
  cursor: ${(props) =>
    props.$disabled
      ? "not-allowed"
      : props.$hasOnClick
        ? "pointer"
        : "default"};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  filter: ${(props) => (props.$disabled ? "grayscale(0.5)" : "none")};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: ${(props) =>
      props.$disabled ? 0.6 : props.$hasOnClick ? 0.8 : 1};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100% !important;
    height: auto !important;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  className,
  loading = "lazy",
  objectFit = "cover",
  borderRadius,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledImg
      src={src}
      alt={alt}
      $width={width}
      $height={height}
      $disabled={disabled}
      className={className}
      loading={loading}
      $objectFit={objectFit}
      $borderRadius={borderRadius}
      $hasOnClick={!!onClick}
      onClick={handleClick}
      {...props}
    />
  );
};
