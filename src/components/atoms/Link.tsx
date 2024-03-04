import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Link: React.FC<IProps> = ({ to, children, className }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <NextLink href={to} onClick={handleClick} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
