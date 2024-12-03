import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <Typography variant="h5" className="mb-4">
          Your cart is empty
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4" className="mb-6">
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <div className="flex items-center justify-center gap-2">
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </IconButton>
                  </div>
                </TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="mt-8 flex flex-col items-end">
        <Typography variant="h5" className="mb-4">
          Total: ${total.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Proceed to Checkout
        </Button>
      </Box>
    </div>
  );
};