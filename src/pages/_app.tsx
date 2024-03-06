import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { v4 as uuidv4 } from "uuid";
import Cookie from "js-cookie";

import Layout from "@/components/templates/Layout";
import tailwindConfig from "../../tailwind.config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trackPageview } from "@/services/analytics-api";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  useEffect(() => {
    let userId = Cookie.get("userId");
    if (!userId) {
      userId = uuidv4();
      Cookie.set("userId", userId, { path: "/" });
    }

    const handleRouteChange = (url: string) => {
      if (userId) trackPageview({ url, userId });
    };

    if (isInitialLoad) {
      trackPageview({ url: router.asPath, userId: userId! });
      setIsInitialLoad(false);
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.asPath, isInitialLoad]);

  return (
    <Layout navbar={navbar}>
      <Component {...pageProps} />
    </Layout>
  );
}
