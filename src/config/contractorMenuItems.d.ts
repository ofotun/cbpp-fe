import React from 'react';

export interface ContractorMenuItem {
  id: string;
  title: string;
  path?: string;
  icon: React.ComponentType<any>;
  children?: ContractorMenuItem[];
  color?: string;
  description?: string;
}

declare const contractorMenuItems: ContractorMenuItem[];
export default contractorMenuItems; 