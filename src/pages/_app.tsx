import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/templates/Layout";
import tailwindConfig from "../../tailwind.config";

export default function App({ Component, pageProps }: AppProps) {
  const navbar: React.ComponentProps<typeof Layout>["navbar"] = {
    logo: {
      url: "logo.svg",
      width: 150,
      height: 150,
    },
    links: [
      {
        to: "https://github.com/cncoding101",
        icon: {
          type: "fa",
          icon: "github",
          color: tailwindConfig.theme.extend.colors.secondary,
          size: 35,
        },
      },
    ],
  };

  return (
    <Layout navbar={navbar}>
      <Component {...pageProps} />
    </Layout>
  );
}
