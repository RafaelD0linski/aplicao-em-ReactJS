// src/pages/DadosPage.js
import { useParams } from 'react-router-dom';
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
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../services/api';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Botão Voltar */}
      <Button
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/post"
        sx={{ mb: 3 }}
      >
        Voltar
      </Button>

      {/* Metadados */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Chip label={post.category} color="primary" />
        <Chip label={`Autor: ${post.author}`} />
        <Chip label={post.date} />
      </Box>

      {/* Título */}
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>

      {/* Tempo de leitura */}
      <Typography color="text.secondary" gutterBottom>
        ⏳ {post.readTime}
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Conteúdo completo */}
      <Typography paragraph sx={{ fontSize: '1.1rem' }}>
        {post.body}
      </Typography>

      {/* Seções extras (aparecem SOMENTE aqui) */}
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