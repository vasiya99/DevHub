// src/pages/Projects.tsx
import ProjectCard from '../components/ProjectCard';
import Grid from '@mui/material/Grid';

export default function Projects() {
  const projects = [
    {
      title: 'DevHub API',
      description: 'Backend API built with .NET 8, EF Core, Azure, and CI/CD.',
      repoUrl: 'https://github.com/vasiya99/DevHub/tree/master/src/Services/Users/Users.Api',
      liveUrl: 'https://devhub-api-ejh0h2due8hkdtb0.australiaeast-01.azurewebsites.net/weatherforecast',
    },
    {
      title: 'DevHub WebApp',
      description: 'Frontend React app using Vite, TypeScript, and Material UI.',
      repoUrl: 'https://devhub-api-ejh0h2due8hkdtb0.australiaeast-01.azurewebsites.net',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <Grid container spacing={2}>
        {projects.map((p, i) => (
          <Grid item key={i}>
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
