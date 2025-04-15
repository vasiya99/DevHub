// src/components/ProjectCard.tsx
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

type Project = {
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({ title, description, repoUrl, liveUrl }: Project) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {repoUrl && (
          <Button size="small" href={repoUrl} target="_blank">
            Code
          </Button>
        )}
        {liveUrl && (
          <Button size="small" href={liveUrl} target="_blank">
            Live Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
