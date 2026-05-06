"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="p-2.5 rounded-xl border-2 border-light-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800/90 text-light-900 dark:text-amber-300 shadow-md hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {!mounted ? (
        <MoonIcon className="h-5 w-5" />
      ) : isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
