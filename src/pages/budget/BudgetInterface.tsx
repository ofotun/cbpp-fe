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
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';

interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
  status: string;
}

const BudgetInterface: React.FC = () => {
  const { user } = useAppContext();
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BudgetItem | null>(null);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    amount: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBudgetItems();
  }, []);

  const loadBudgetItems = async () => {
    try {
      const items = await mockApi.getBudgetItems();
      setBudgetItems(items);
    } catch (error) {
      setError('Failed to load budget items');
    }
  };

  const handleOpenDialog = (item?: BudgetItem) => {
    if (item) {
      setSelectedItem(item);
      setFormData({
        category: item.category,
        description: item.description,
        amount: item.amount.toString(),
      });
    } else {
      setSelectedItem(null);
      setFormData({
        category: '',
        description: '',
        amount: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setFormData({
      category: '',
      description: '',
      amount: '',
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
      if (selectedItem) {
        await mockApi.updateBudgetItem(selectedItem.id, {
          ...formData,
          amount: parseFloat(formData.amount),
        });
      } else {
        await mockApi.createBudgetItem({
          ...formData,
          amount: parseFloat(formData.amount),
          status: 'pending',
        });
      }
      handleCloseDialog();
      loadBudgetItems();
    } catch (error) {
      setError('Failed to save budget item');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockApi.deleteBudgetItem(id);
      loadBudgetItems();
    } catch (error) {
      setError('Failed to delete budget item');
    }
  };

  const getTotalBudget = () => {
    return budgetItems.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4">Budget Interface</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Add Budget Item
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Budget Summary
              </Typography>
              <Typography variant="body1">
                Total Budget: ₦{getTotalBudget().toLocaleString()}
              </Typography>
              <Typography variant="body1">
                Number of Items: {budgetItems.length}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgetItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>₦{item.amount.toLocaleString()}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDialog(item)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            {selectedItem ? 'Edit Budget Item' : 'Add Budget Item'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={formData.category}
                    label="Category"
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  >
                    <MenuItem value="materials">Materials</MenuItem>
                    <MenuItem value="labor">Labor</MenuItem>
                    <MenuItem value="equipment">Equipment</MenuItem>
                    <MenuItem value="overhead">Overhead</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
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
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {selectedItem ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default BudgetInterface; 