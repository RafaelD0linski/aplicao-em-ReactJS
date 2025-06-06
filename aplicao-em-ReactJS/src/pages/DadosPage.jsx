import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
} from '@mui/material';
import api from '../services/api';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Detalhes do Post</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {post.body}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/post"
        >
          Voltar para lista
        </Button>
      </Container>
    </>
  );
}