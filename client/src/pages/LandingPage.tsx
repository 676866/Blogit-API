import { Container, Typography, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10}>
        <Typography variant="h2" gutterBottom>
          Welcome to BlogIt
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Create, share, and explore blogs.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
