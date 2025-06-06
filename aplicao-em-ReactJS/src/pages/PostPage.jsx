import { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import api from '../services/api';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}