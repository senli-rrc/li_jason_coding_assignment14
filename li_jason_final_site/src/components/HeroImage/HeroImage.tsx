import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

interface StyledHeroProps {
  $height?: string;
  $disabled?: boolean;
  $hasOnClick?: boolean;
}

const HeroContainer = styled.div<StyledHeroProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height || "400px"};
  overflow: hidden;
  cursor: ${(props) =>
    props.$disabled
      ? "not-allowed"
      : props.$hasOnClick
        ? "pointer"
        : "default"};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  filter: ${(props) => (props.$disabled ? "grayscale(0.3)" : "none")};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: ${(props) =>
      props.$disabled ? 0.6 : props.$hasOnClick ? 0.9 : 1};
  }

  @media (max-width: 768px) {
    height: ${(props) =>
      props.$height ? parseInt(props.$height) * 0.7 + "px" : "280px"};
  }

  @media (max-width: 480px) {
    height: ${(props) =>
      props.$height ? parseInt(props.$height) * 0.5 + "px" : "200px"};
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div<{
  $overlayColor?: string;
  $overlayOpacity?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$overlayColor || "rgba(0, 0, 0, 0.4)"};
  opacity: ${(props) => props.$overlayOpacity || 0.4};
`;

const ContentContainer = styled.div<{
  $textAlign?: "left" | "center" | "right";
  $textColor?: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: ${(props) => props.$textAlign || "center"};
  color: ${(props) => props.$textColor || "white"};
  z-index: 2;
  width: 90%;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height = "400px",
  overlay = true,
  overlayColor,
  overlayOpacity,
  disabled = false,
  className,
  textAlign = "center",
  textColor = "white",
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <HeroContainer
      $height={height}
      $disabled={disabled}
      $hasOnClick={!!onClick}
      className={className}
      onClick={handleClick}
    >
      <HeroImg src={src} alt={alt} />
      {overlay && (
        <Overlay
          $overlayColor={overlayColor}
          $overlayOpacity={overlayOpacity}
        />
      )}
      <ContentContainer $textAlign={textAlign} $textColor={textColor}>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </ContentContainer>
    </HeroContainer>
  );
};
