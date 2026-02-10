import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="h-6 w-6 cursor-pointer"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonIcon className="h-full w-full hover:text-header" />
      ) : (
        <SunIcon className="h-full w-full hover:text-header" />
      )}
    </div>
  );
}
