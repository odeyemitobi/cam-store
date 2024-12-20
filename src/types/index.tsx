export interface CustomButtonProps {
  text?: string;
  icon?: React.ComponentType<{ size?: number }>;
  showIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
