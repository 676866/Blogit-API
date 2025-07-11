import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: '', // email or username
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // TODO: call your backend API
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Login to BlogIt
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email or Username" name="identifier" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
