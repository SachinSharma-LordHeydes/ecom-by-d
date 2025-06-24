import React from "react";
import { Providers } from "../_providers";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Providers>{children}</Providers>
    </div>
  );
};

export default layout;
