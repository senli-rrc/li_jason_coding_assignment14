export interface TextProps {
  /** Text content */
  children: React.ReactNode;
  /** Text element type */
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Text size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Text weight */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  /** Text color */
  color?: string;
  /** Text alignment */
  align?: "left" | "center" | "right" | "justify";
  /** Disabled state */
  disabled?: boolean;
  /** Background color */
  backgroundColor?: string;
}
