export interface ImgProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  className?: string;
  loading?: "lazy" | "eager";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  borderRadius?: string;
  onClick?: () => void;
}
