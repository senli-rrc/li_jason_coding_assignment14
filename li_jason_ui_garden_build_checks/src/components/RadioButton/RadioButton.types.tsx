export interface RadioButtonProps {
  /** Radio button name */
  name: string;
  /** Radio button value */
  value: string;
  /** Label text */
  label?: string;
  /** Checked state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Radio button size */
  size?: "small" | "medium" | "large";
  /** Color theme */
  color?: string;
  /** Background color when checked */
  checkedColor?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Children content (for custom label) */
  children?: React.ReactNode;
}
