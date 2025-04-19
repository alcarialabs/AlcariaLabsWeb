"use client";

// Ya no se necesita ThemeProvider
// import { ThemeProvider } from "next-themes"; 

export function Providers({ children }: { children: React.ReactNode }) {
  // Simplemente devolvemos los hijos sin el ThemeProvider
  return <>{children}</>; 
}
