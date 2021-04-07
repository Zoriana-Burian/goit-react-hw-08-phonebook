import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './Register.module.css';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const paperStyle = {
    padding: 20,
    heihth: 70,
    width: 400,
    margin: '100px auto',
  };
  const buttonStyle = {
    marginTop: '40px',
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid align="center">
            <h1 className={s.title}>Зареєструйтесь, будь ласка</h1>
            <Avatar>
              <VpnKeyIcon />
            </Avatar>
          </Grid>
          <TextField
            label="Ім'я"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Пароль"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            fullWidth
            style={buttonStyle}
          >
            Зареєструватися
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
