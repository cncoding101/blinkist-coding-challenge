import React from "react";
import Icon from "@/components/atoms/Icon";
import Link from "@/components/atoms/Link";

interface IProps {
  to: React.ComponentProps<typeof Link>["to"];
  icon: React.ComponentProps<typeof Icon>;
}

const LinkIcon: React.FC<IProps> = ({ to, icon }) => {
  return (
    <Link to={to}>
      <Icon {...icon} />
    </Link>
  );
};

export default LinkIcon;
