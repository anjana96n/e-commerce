import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <AppBar position="static">
        <Toolbar className="justify-between">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="no-underline text-white"
          >
            EcoShop
          </Typography>
          <Box className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/cart"
                  startIcon={
                    <Badge badgeContent={itemCount} color="error">
                      <ShoppingCart />
                    </Badge>
                  }
                >
                  Cart
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};