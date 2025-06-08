import { Typography, Box } from '@mui/material';

function Transactions() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Transactions
      </Typography>
      <Typography variant="body1">
        Transaction history will be displayed here.
      </Typography>
    </Box>
  );
}

export default Transactions; 