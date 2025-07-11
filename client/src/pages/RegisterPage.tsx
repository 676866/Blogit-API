import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register data:', formData);
    // TODO: call your backend API
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="First Name" name="firstName" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Last Name" name="lastName" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Username" name="username" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
