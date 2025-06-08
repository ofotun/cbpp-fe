import React from 'react';
interface CardNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const CardNavigation: React.FC<CardNavigationProps>;
export default CardNavigation;
