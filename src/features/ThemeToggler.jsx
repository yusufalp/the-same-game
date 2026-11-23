import { useEffect, useState } from "react";
import SegmentedControl from "../components/SegmentedControl";

const THEMES = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="theme-toggler">
      <SegmentedControl
        options={THEMES}
        size="xs"
        value={theme}
        onChange={setTheme}
      />
    </div>
  );
}
