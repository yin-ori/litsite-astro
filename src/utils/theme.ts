/**
 * Theme utility functions for managing dark/light mode
 * Centralized to avoid code duplication across components
 */

export type Theme = 'light' | 'dark';

export const themeUtils = {
  /**
   * Get the current theme from localStorage or return default
   * @returns The current theme ('light' or 'dark')
   */
  getTheme: (): Theme => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme;
    }
    // Default to light mode
    return 'light';
  },

  /**
   * Set the theme and update the DOM and localStorage
   * @param theme - The theme to set ('light' or 'dark')
   */
  setTheme: (theme: Theme): void => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  },

  /**
   * Toggle between light and dark themes
   */
  toggleTheme: (): void => {
    const currentTheme = themeUtils.getTheme();
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    themeUtils.setTheme(newTheme);
  },
};

/**
 * Initialize theme on page load (for use in inline scripts)
 * This is a string that can be injected into a script tag
 */
export const themeInitScript = `
(function() {
  function getTheme() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const theme = getTheme();
  setTheme(theme);
})();
`;
