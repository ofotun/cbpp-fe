import React, { createContext, useContext, useState, useEffect } from 'react';

type NavigationStyle = 'sidebar' | 'card';

interface NavigationContextType {
  navStyle: NavigationStyle;
  toggleNavStyle: () => void;
  setNavStyle: (style: NavigationStyle) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get saved preference from localStorage or default to sidebar
  const [navStyle, setNavStyle] = useState<NavigationStyle>(() => {
    const savedStyle = localStorage.getItem('navStyle');
    return (savedStyle as NavigationStyle) || 'sidebar';
  });

  // Save preference when it changes
  useEffect(() => {
    localStorage.setItem('navStyle', navStyle);
  }, [navStyle]);

  const toggleNavStyle = () => {
    setNavStyle(prev => prev === 'sidebar' ? 'card' : 'sidebar');
  };

  return (
    <NavigationContext.Provider value={{ navStyle, toggleNavStyle, setNavStyle }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}; 