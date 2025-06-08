import { SvgIcon, SvgIconProps } from '@mui/material';
import { Group as GroupIcon, AccountBalance as AccountBalanceIcon, Assignment as AssignmentIcon, Payment as MuiPaymentIcon } from '@mui/icons-material';

export const CommunityIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} component={GroupIcon} sx={{ fontSize: 40, color: 'primary.main' }} />
);

export const BudgetIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} component={AccountBalanceIcon} sx={{ fontSize: 40, color: 'primary.main' }} />
);

export const ProjectIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} component={AssignmentIcon} sx={{ fontSize: 40, color: 'primary.main' }} />
);

export const PaymentIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} component={MuiPaymentIcon} sx={{ fontSize: 40, color: 'primary.main' }} />
); 