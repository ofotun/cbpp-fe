import React from 'react';
type NavigationStyle = 'sidebar' | 'card';
interface NavigationContextType {
    navStyle: NavigationStyle;
    toggleNavStyle: () => void;
    setNavStyle: (style: NavigationStyle) => void;
}
export declare const NavigationProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useNavigation: () => NavigationContextType;
export {};
