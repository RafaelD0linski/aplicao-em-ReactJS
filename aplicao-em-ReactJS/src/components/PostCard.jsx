import { Card, CardContent, Typography, Button, CardActions, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 3
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Mostra a categoria se existir */}
        {post.category && (
          <Chip 
            label={post.category} 
            size="small" 
            color="primary"
            sx={{ mb: 1 }}
          />
        )}
        
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3em' // Garante espaço para 2 linhas mesmo se título for curto
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
            mb: 1
          }}
        >
          {post.body}
        </Typography>
        
        {/* Metadados no rodapé do card */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 1 }}>
          {post.author && (
            <Typography variant="caption" color="text.secondary">
              Por {post.author}
            </Typography>
          )}
          {post.readTime && (
            <Typography variant="caption" color="text.secondary">
              ⏱️ {post.readTime}
            </Typography>
          )}
        </Box>
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="small" 
          variant="outlined"
          onClick={() => navigate(`/detalhes/${post.id}`)}
          sx={{ 
            ml: 'auto',
            fontWeight: 'bold'
          }}
        >
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}