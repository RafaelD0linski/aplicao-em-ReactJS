import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import posts from '../data/posts.json';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postSelecionado = posts.find((p) => p.id === parseInt(id));
    setPost(postSelecionado);
  }, [id]);

  if (!post) return <Typography>Post não encontrado.</Typography>;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/post"
        sx={{ mb: 3 }}
      >
        Voltar
      </Button>

      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        {post.category && <Chip label={post.category} color="primary" />}
        {post.author && <Chip label={`Autor: ${post.author}`} />}
        {post.date && <Chip label={post.date} />}
      </Box>

      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>

      {post.readTime && (
        <Typography color="text.secondary" gutterBottom>
          ⏳ {post.readTime}
        </Typography>
      )}

      <Divider sx={{ my: 3 }} />

      <Typography paragraph sx={{ fontSize: '1.1rem' }}>
        {post.body}
      </Typography>

      {post.tips && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>📌 Dicas:</Typography>
          <List dense>
            {post.tips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${tip}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {post.benefits && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>💡 Benefícios:</Typography>
          <List dense>
            {post.benefits.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${item}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <Button
        variant="contained"
        component={Link}
        to="/post"
        sx={{ mt: 4 }}
      >
        Voltar para lista
      </Button>
    </Container>
  );
}
