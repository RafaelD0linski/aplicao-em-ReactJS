import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  CircularProgress,
  Box,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../services/api';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setError(null);
      })
      .catch((err) => {
        setError('Post não encontrado ou erro ao carregar');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>Carregando post...</Typography>
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography color="error" variant="h5" gutterBottom>
          {error || 'Post não encontrado'}
        </Typography>
        <Typography paragraph>
          O post solicitado não foi encontrado em nosso sistema.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/post"
          sx={{ mt: 2 }}
          startIcon={<ArrowBackIcon />}
        >
          Voltar para lista de posts
        </Button>
      </Container>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            component={Link}
            to="/post"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Detalhes do Post</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        
        <Typography 
          variant="body1" 
          paragraph
          sx={{
            whiteSpace: 'pre-line',
            lineHeight: '1.8',
            fontSize: '1.1rem'
          }}
        >
          {post.body}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/post"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Voltar para todos os posts
        </Button>
      </Container>
    </>
  );
}