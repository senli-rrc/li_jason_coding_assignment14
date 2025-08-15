export interface LabelProps {
  /** Label text */
  children: React.ReactNode;
  /** Label size */
  size?: "small" | "medium" | "large";
  /** Label variant */
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  /** Disabled state */
  disabled?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** HTML for attribute */
  htmlFor?: string;
}
