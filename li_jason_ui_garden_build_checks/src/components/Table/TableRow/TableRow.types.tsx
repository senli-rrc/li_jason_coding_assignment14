export interface TableRowProps {
  /** Row content */
  children: React.ReactNode;
  /** Row variant */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
  /** Disabled state */
  disabled?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Click handler */
  onClick?: () => void;
  /** Hover effect */
  hover?: boolean;
}
