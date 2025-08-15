export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Dropdown options */
  options: DropdownOption[];
  /** Selected value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Dropdown size */
  size?: "small" | "medium" | "large";
  /** Disabled state */
  disabled?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** Border color */
  borderColor?: string;
  /** Multiple selection */
  multiple?: boolean;
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  /** Error state */
  error?: boolean;
  /** Full width */
  fullWidth?: boolean;
}
