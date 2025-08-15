export interface TableProps {
  /** Table content */
  children: React.ReactNode;
  /** Table variant */
  variant?: "default" | "striped" | "bordered" | "hover";
  /** Table size */
  size?: "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Responsive behavior */
  responsive?: boolean;
}

export interface TableHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** Disabled state */
  disabled?: boolean;
}

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

export interface TableCellProps {
  /** Cell content */
  children: React.ReactNode;
  /** Cell type */
  as?: "td" | "th";
  /** Cell alignment */
  align?: "left" | "center" | "right";
  /** Cell width */
  width?: string;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** Disabled state */
  disabled?: boolean;
}

export interface TableFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** Disabled state */
  disabled?: boolean;
}
