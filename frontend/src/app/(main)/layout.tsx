import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import React from "react";

const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <LanguageProvider>
        <Header />
        {children}
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default mainLayout;
