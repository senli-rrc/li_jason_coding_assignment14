export interface CardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  disabled?: boolean;
  variant?: "default" | "outlined" | "elevated";
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}
