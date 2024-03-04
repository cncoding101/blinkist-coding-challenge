import React from "react";

import Logo from "@/components/atoms/Image";
import LinkIcon from "@/components/molecules/LinkIcon";

interface IProps {
  logo: React.ComponentProps<typeof Logo>;
  links?: React.ComponentProps<typeof LinkIcon>[];
}

const Navbar: React.FC<IProps> = ({ logo, links }) => {
  return (
    <nav className="flex h-16 items-center space-x-4 border-b px-8">
      <div className="flex-1">
        <Logo {...logo} />
      </div>

      <div className="flex-1">
        <div className="flex justify-end">
          {links &&
            links.map((link, index) => <LinkIcon key={index} {...link} />)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
