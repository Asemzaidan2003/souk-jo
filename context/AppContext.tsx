"use client";

import { createContext, useContext } from "react";

export type AppConfig = {
  logo: string;
  name: string;
};

const AppContext = createContext<AppConfig | null>(null);

export function AppProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: AppConfig;
}) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp لازم يكون داخل AppProvider");
  }
  return context;
}
