import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalhes do Post</Typography>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
}