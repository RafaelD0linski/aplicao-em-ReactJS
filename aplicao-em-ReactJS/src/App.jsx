import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
  Box
} from '@mui/material';

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Página Inicial
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
        >
          <Typography variant="h3" gutterBottom>
            prova
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/post')}
          >
            Ir para /post
          </Button>
        </Box>
      </Container>
    </>
  );
}
