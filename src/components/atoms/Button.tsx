import type { ReactNode, MouseEvent } from "react";

type Type = keyof typeof BUTTON_TYPES;

const BUTTON_TYPES = {
  primary: "primary",
} as const;

interface IProps {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  variant?: Type;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  children,
  variant,
  onClick,
  className = "",
  disabled = false,
}) => {
  switch (variant) {
    case BUTTON_TYPES.primary:
      return (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`${className} flex w-auto items-center justify-center rounded border border-gray-200 bg-primary p-4 px-4 py-2 text-sm font-medium text-secondary focus:outline-none focus:ring-1 focus:ring-gray-200 ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`${className} p-4 ${disabled ? "opacity-50" : ""}`}
        >
          {children}
        </button>
      );
  }
};

export default Button;
