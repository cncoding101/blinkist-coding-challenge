import { useEffect, useState } from "react";

const threshold = {
  phone: 1024,
} as const;

const usePhoneView = () => {
  const [isPhoneView, setIsPhoneView] = useState(
    typeof window !== "undefined" && window.innerWidth < threshold.phone
  );

  useEffect(() => {
    function handleResize() {
      setIsPhoneView(window.innerWidth < threshold.phone);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsPhoneView]);

  return isPhoneView;
};

export { usePhoneView };
