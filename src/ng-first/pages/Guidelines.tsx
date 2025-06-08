import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Chip,
  Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

interface Guideline {
  id: number;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  lastUpdated: string;
}

// Mock data for guidelines
const mockGuidelines: Guideline[] = [
  {
    id: 1,
    title: 'Procurement Guidelines 2024',
    description: 'Comprehensive guidelines for procurement processes and procedures.',
    category: 'Procurement',
    fileUrl: '/documents/procurement-guidelines-2024.pdf',
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    title: 'Community Engagement Framework',
    description: 'Framework for effective community engagement and participation.',
    category: 'Community',
    fileUrl: '/documents/community-engagement-framework.pdf',
    lastUpdated: '2024-02-28'
  },
  {
    id: 3,
    title: 'Budget Management Policy',
    description: 'Policy guidelines for effective budget management and allocation.',
    category: 'Finance',
    fileUrl: '/documents/budget-management-policy.pdf',
    lastUpdated: '2024-03-01'
  }
];

const Guidelines: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories from guidelines
  const categories = useMemo(() => {
    const uniqueCategories = new Set(mockGuidelines.map(g => g.category));
    return Array.from(uniqueCategories);
  }, []);

  // Filter guidelines based on search query, category, and tags
  const filteredGuidelines = useMemo(() => {
    return mockGuidelines.filter(guideline => {
      const matchesSearch = guideline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guideline.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || guideline.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => guideline.description.toLowerCase().includes(tag.toLowerCase()));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleDownload = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Guidelines & Policies
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Access and download important documents and guidelines
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search guidelines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClearSearch} edge="end">
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Active Filters */}
        {(selectedCategory !== 'all' || selectedTags.length > 0) && (
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Active filters:
            </Typography>
            <Stack direction="row" spacing={1}>
              {selectedCategory !== 'all' && (
                <Chip
                  label={`Category: ${selectedCategory}`}
                  onDelete={() => setSelectedCategory('all')}
                  size="small"
                />
              )}
              {selectedTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                  size="small"
                />
              ))}
              {(selectedCategory !== 'all' || selectedTags.length > 0) && (
                <Chip
                  label="Clear all"
                  onClick={handleClearFilters}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              )}
            </Stack>
          </Box>
        )}
      </Box>

      {/* Guidelines Grid */}
      <Grid container spacing={4}>
        {filteredGuidelines.map((guideline) => (
          <Grid item xs={12} md={6} key={guideline.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {guideline.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {guideline.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                  <Chip 
                    label={guideline.category} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                    onClick={() => setSelectedCategory(guideline.category)}
                  />
                  <Chip 
                    label={`Updated: ${new Date(guideline.lastUpdated).toLocaleDateString()}`} 
                    size="small" 
                    variant="outlined"
                  />
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  startIcon={<DownloadIcon />}
                  onClick={() => handleDownload(guideline.fileUrl)}
                  size="small"
                >
                  Download
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* No Results Message */}
      {filteredGuidelines.length === 0 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No guidelines found matching your criteria
          </Typography>
          <Button 
            onClick={handleClearFilters} 
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Clear Filters
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Guidelines; 