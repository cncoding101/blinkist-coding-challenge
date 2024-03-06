import Head from "next/head";
import type { ReactNode } from "react";

import Navbar from "@/components/organisms/Navbar";

interface IProps {
  navbar: React.ComponentProps<typeof Navbar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ navbar, children }) => {
  return (
    <>
      <Head>
        <title>Blinkist</title>
        <link rel="icon" href="/logo_head.png" />
      </Head>

      <div className="flex h-screen flex-col overflow-x-hidden">
        {/* navbar */}
        <header className="sticky top-0">
          <Navbar {...navbar} />
        </header>

        {/* content */}
        <main className="overflow-y-auto h-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
