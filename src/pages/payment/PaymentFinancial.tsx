import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';

interface Payment {
  id: string;
  projectId: string;
  amount: number;
  status: string;
  type: string;
  date: string;
  description: string;
  recipient: string;
  paymentMethod: string;
  reference: string;
}

const PaymentFinancial: React.FC = () => {
  const { user } = useAppContext();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [formData, setFormData] = useState({
    projectId: '',
    amount: '',
    type: '',
    description: '',
    recipient: '',
    paymentMethod: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {
    try {
      const response = await mockApi.getPayments();
      setPayments(response.items);
    } catch (error) {
      setError('Failed to load payments');
    }
  };

  const handleOpenDialog = (payment?: Payment) => {
    if (payment) {
      setSelectedPayment(payment);
      setFormData({
        projectId: payment.projectId,
        amount: payment.amount.toString(),
        type: payment.type,
        description: payment.description,
        recipient: payment.recipient,
        paymentMethod: payment.paymentMethod,
      });
    } else {
      setSelectedPayment(null);
      setFormData({
        projectId: '',
        amount: '',
        type: '',
        description: '',
        recipient: '',
        paymentMethod: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPayment(null);
    setFormData({
      projectId: '',
      amount: '',
      type: '',
      description: '',
      recipient: '',
      paymentMethod: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (selectedPayment) {
        await mockApi.updatePayment(selectedPayment.id, {
          ...formData,
          amount: parseFloat(formData.amount),
        });
      } else {
        await mockApi.createPayment({
          ...formData,
          amount: parseFloat(formData.amount),
          status: 'pending',
          date: new Date().toISOString(),
          reference: `PAY-${Date.now()}`,
        });
      }
      handleCloseDialog();
      loadPayments();
    } catch (error) {
      setError('Failed to save payment');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockApi.deletePayment(id);
      loadPayments();
    } catch (error) {
      setError('Failed to delete payment');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'warning';
      case 'approved':
        return 'success';
      case 'rejected':
        return 'error';
      case 'processed':
        return 'info';
      default:
        return 'default';
    }
  };

  const getTotalPayments = () => {
    return payments.reduce((total, payment) => total + payment.amount, 0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4">Payment & Financial</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Create Payment
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Financial Summary
                </Typography>
                <Typography variant="body1">
                  Total Payments: ₦{getTotalPayments().toLocaleString()}
                </Typography>
                <Typography variant="body1">
                  Number of Transactions: {payments.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reference</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.reference}</TableCell>
                  <TableCell>{payment.projectId}</TableCell>
                  <TableCell>₦{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>
                    <Chip
                      label={payment.status}
                      color={getStatusColor(payment.status)}
                    />
                  </TableCell>
                  <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDialog(payment)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(payment.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogTitle>
            {selectedPayment ? 'Edit Payment' : 'Create Payment'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project ID"
                  value={formData.projectId}
                  onChange={(e) => handleInputChange('projectId', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Payment Type</InputLabel>
                  <Select
                    value={formData.type}
                    label="Payment Type"
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  >
                    <MenuItem value="advance">Advance Payment</MenuItem>
                    <MenuItem value="progress">Progress Payment</MenuItem>
                    <MenuItem value="final">Final Payment</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={3}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Recipient"
                  value={formData.recipient}
                  onChange={(e) => handleInputChange('recipient', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Payment Method</InputLabel>
                  <Select
                    value={formData.paymentMethod}
                    label="Payment Method"
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  >
                    <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
                    <MenuItem value="cheque">Cheque</MenuItem>
                    <MenuItem value="cash">Cash</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {selectedPayment ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default PaymentFinancial; 