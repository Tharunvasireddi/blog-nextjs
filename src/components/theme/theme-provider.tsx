"use client";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import Header from "../layout/header";
import { cn } from "@/lib/utils";

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  contianerClassName?: string;
}

// this theme provider provides a global state where we can changes the themes at once of all the components

export function ThemeProvider({
  children,
  contianerClassName,
  ...props
}: ExtendedThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Header />
      <main className={cn("container mx-auto px-4", contianerClassName)}>
        {children}
      </main>
    </NextThemesProvider>
  );
}
