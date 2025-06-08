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
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';

interface Procurement {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string;
  bids: Bid[];
}

interface Bid {
  id: string;
  contractorId: string;
  amount: number;
  status: string;
  submittedAt: string;
}

const ProcurementProcess: React.FC = () => {
  const { user } = useAppContext();
  const [procurements, setProcurements] = useState<Procurement[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProcurement, setSelectedProcurement] = useState<Procurement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    startDate: '',
    endDate: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    loadProcurements();
  }, []);

  const loadProcurements = async () => {
    try {
      const response = await mockApi.getProcurements();
      setProcurements(response.items);
    } catch (error) {
      setError('Failed to load procurements');
    }
  };

  const handleOpenDialog = (procurement?: Procurement) => {
    if (procurement) {
      setSelectedProcurement(procurement);
      setFormData({
        title: procurement.title,
        description: procurement.description,
        category: procurement.category,
        budget: procurement.budget.toString(),
        startDate: procurement.startDate,
        endDate: procurement.endDate,
      });
    } else {
      setSelectedProcurement(null);
      setFormData({
        title: '',
        description: '',
        category: '',
        budget: '',
        startDate: '',
        endDate: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProcurement(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      budget: '',
      startDate: '',
      endDate: '',
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
      if (selectedProcurement) {
        await mockApi.updateProcurement(selectedProcurement.id, {
          ...formData,
          budget: parseFloat(formData.budget),
        });
      } else {
        await mockApi.createProcurement({
          ...formData,
          budget: parseFloat(formData.budget),
          status: 'draft',
          bids: [],
        });
      }
      handleCloseDialog();
      loadProcurements();
    } catch (error) {
      setError('Failed to save procurement');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockApi.deleteProcurement(id);
      loadProcurements();
    } catch (error) {
      setError('Failed to delete procurement');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'draft':
        return 'default';
      case 'published':
        return 'primary';
      case 'in_progress':
        return 'info';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4">Procurement Process</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Create Procurement
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          <Step>
            <StepLabel>Planning</StepLabel>
          </Step>
          <Step>
            <StepLabel>Advertisement</StepLabel>
          </Step>
          <Step>
            <StepLabel>Bidding</StepLabel>
          </Step>
          <Step>
            <StepLabel>Evaluation</StepLabel>
          </Step>
          <Step>
            <StepLabel>Award</StepLabel>
          </Step>
        </Stepper>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Budget</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {procurements.map((procurement) => (
                <TableRow key={procurement.id}>
                  <TableCell>{procurement.title}</TableCell>
                  <TableCell>{procurement.category}</TableCell>
                  <TableCell>₦{procurement.budget.toLocaleString()}</TableCell>
                  <TableCell>
                    <Chip
                      label={procurement.status}
                      color={getStatusColor(procurement.status)}
                    />
                  </TableCell>
                  <TableCell>{new Date(procurement.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(procurement.endDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDialog(procurement)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(procurement.id)}>
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
            {selectedProcurement ? 'Edit Procurement' : 'Create Procurement'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={formData.category}
                    label="Category"
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  >
                    <MenuItem value="construction">Construction</MenuItem>
                    <MenuItem value="supply">Supply</MenuItem>
                    <MenuItem value="consulting">Consulting</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget"
                  type="number"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {selectedProcurement ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default ProcurementProcess; 