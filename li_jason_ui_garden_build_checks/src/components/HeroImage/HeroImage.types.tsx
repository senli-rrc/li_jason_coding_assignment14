export interface HeroImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  disabled?: boolean;
  className?: string;
  textAlign?: "left" | "center" | "right";
  textColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
