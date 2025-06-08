export interface MenuItem {
    id: string;
    title: string;
    path?: string;
    icon: React.ElementType;
    children?: MenuItem[];
    color?: string;
    description?: string;
}
declare const menuItems: MenuItem[];
export default menuItems;
