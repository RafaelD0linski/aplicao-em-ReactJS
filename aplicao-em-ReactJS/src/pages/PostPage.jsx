import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  CssBaseline,
} from '@mui/material';
import postsData from '../data/posts.json';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const [posts] = useState(postsData);

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