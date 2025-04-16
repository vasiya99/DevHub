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
      repoUrl: 'https://github.com/vasiya99/DevHub/tree/master/src/Web/devhub-webapp',
      liveUrl: 'https://devhub-api-ejh0h2due8hkdtb0.australiaeast-01.azurewebsites.net',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <Grid container spacing={2}> {/* Outer Grid container */}
        {projects.map((p, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}> {/* Inner Grid item */}
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
