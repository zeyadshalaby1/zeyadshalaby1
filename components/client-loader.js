"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { PageLoader } from "./page-loader";

export function ClientLoader({ children }) {
  const [loading, setLoading] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div className={loading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
}
