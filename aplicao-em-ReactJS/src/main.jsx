import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import AppRoutes from './routes/AppRoutes';

// Criar o tema do Material UI com idioma português
const theme = createTheme({}, ptBR);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);