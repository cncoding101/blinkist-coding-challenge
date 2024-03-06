import type { ReactNode } from "react";

type Variant = keyof typeof ELEMENTS;

interface IProps {
  variant: Variant;
  children: ReactNode | ReactNode[];
  style?: Record<string, unknown>;
  className?: string;
}

const ELEMENTS = {
  title: "h1",
  heading: "h2",
  paragraph: "p",
  label: "label",
} as const;

const Text: React.FC<IProps> = ({
  variant,
  children,
  style,
  className = "",
}) => {
  const Component = ELEMENTS[variant];

  return (
    <Component style={style} className={className}>
      {children}
    </Component>
  );
};

export default Text;
