import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            minHeight: '64px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {post.title}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2
          }}
        >
          {post.body.substring(0, 100)}...
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/detalhes/${post.id}`)}
          sx={{ 
            ml: 'auto',
            fontWeight: 'bold',
            borderRadius: '20px'
          }}
        >
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}