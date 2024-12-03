import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { ProductList } from './pages/ProductList';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Cart } from './pages/Cart';
import { theme } from './theme';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Layout>
              <div style={{ paddingBottom: '4rem' }}/>
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </Layout>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;