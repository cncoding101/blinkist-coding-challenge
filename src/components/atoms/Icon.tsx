import dynamic from "next/dynamic";
import { useMemo } from "react";

type Type = keyof typeof REACT_ICONS;
type Variant = FaVariant;
type FaVariant = keyof typeof REACT_ICONS.fa;

interface IProps {
  type: Type;
  icon: Variant;
  size?: number;
  color?: string;
  className?: string;
}

const REACT_ICONS = {
  fa: {
    github: "FaGithubAlt",
  },
} as const;

const ICON_TYPES = Object.keys(REACT_ICONS) as Type[];

const Icon: React.FC<IProps> = ({ icon, type, color, size, className }) => {
  // Memoize the dynamic import to prevent re-imports on every render
  const IconComponent = useMemo(() => {
    if (!ICON_TYPES.includes(type)) return null;

    switch (type) {
      // NOTE next dynamic import can not be string interporlated!
      case "fa":
        if (!REACT_ICONS.fa[icon as FaVariant]) return null;
        return dynamic(() =>
          import("react-icons/fa").then(
            (icons) => icons[REACT_ICONS.fa[icon as FaVariant]]
          )
        );
    }
  }, [icon, type]);

  if (!IconComponent) return null;
  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
