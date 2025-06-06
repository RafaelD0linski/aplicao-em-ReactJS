import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dados/${post.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.body.substring(0, 60)}...</Typography>
          <Button onClick={handleClick}>Ver Detalhes</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}