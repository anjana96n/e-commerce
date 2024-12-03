import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductList = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Box className="mb-8 flex flex-col sm:flex-row gap-4">
        <TextField
          label="Search products"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow"
        />
        <FormControl className="min-w-[200px]">
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                className="h-48 object-cover"
              />
              <CardContent className="flex-grow">
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mb-4"
                >
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" className="mb-4">
                  ${product.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  fullWidth
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};