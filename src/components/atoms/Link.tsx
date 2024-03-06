import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import NextLink from "next/link";
import Cookie from "js-cookie";
import { trackEvent } from "@/services/analytics-api";

interface IProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Link: React.FC<IProps> = ({ to, children, className }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    const userId = Cookie.get("userId");
    if (userId) {
      trackEvent({
        url: window.location.pathname,
        userId,
        eventName: `link-to-${to}`,
      });
    }

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
