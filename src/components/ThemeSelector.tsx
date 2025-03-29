"use client";

export type LabelTheme = 'standard' | 'dark' | 'colorful';

interface ThemeSelectorProps {
  theme: LabelTheme;
  setTheme: (theme: LabelTheme) => void;
}

export default function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <button
        onClick={() => setTheme('standard')}
        className={`px-3 py-1 rounded-md ${theme === 'standard'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        aria-label="Standard theme"
      >
        Standard
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded-md ${theme === 'dark'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        aria-label="Dark theme"
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('colorful')}
        className={`px-3 py-1 rounded-md ${theme === 'colorful'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        aria-label="Colorful theme"
      >
        Colorful
      </button>
    </div>
  );
}
