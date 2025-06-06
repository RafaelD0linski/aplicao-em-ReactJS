import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  CssBaseline,
} from '@mui/material';
import api from '../services/api';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lista de Posts</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
