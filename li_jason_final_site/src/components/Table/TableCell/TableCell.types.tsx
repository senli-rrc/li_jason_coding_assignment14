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
