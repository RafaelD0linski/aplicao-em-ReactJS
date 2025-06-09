import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  CssBaseline,
} from '@mui/material';
import PostCard from '../components/PostCard';
import api from '../services/api'; // ✅ usando a API real
// import postsData from '../data/posts.json'; // 🔁 alternativa com dados locais

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // ✅ Versão que busca os dados da API real
    api.get('/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error('Erro ao buscar os posts da API', error);
      });

    // 🔁 Versão com dados locais (caso queira usar offline ou sem rede)
    // setPosts(postsData);
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Blog - Todos os Posts</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4, marginBottom: 6 }}>
        {posts.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ py: 4 }}>
            Nenhum post disponível no momento
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
