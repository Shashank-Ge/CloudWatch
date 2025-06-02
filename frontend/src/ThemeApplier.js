import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

function ThemeApplier() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]); // Re-run effect whenever the theme changes

  return null; // This component doesn't render anything itself
}

export default ThemeApplier; 