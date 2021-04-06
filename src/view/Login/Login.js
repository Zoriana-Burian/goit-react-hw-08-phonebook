import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './Login.module.css';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function Login() {
  const dispatch = useDispatch();
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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid align="center">
              <h1 className={s.title}>Зайдіть на вашу сторінку</h1>
              <Avatar>
                <LockOpenIcon />
              </Avatar>
            </Grid>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
            />
            {/* <label className={s.label}>
          Email
          <input
            className={s.formInput}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label> */}
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              fullWidth
            />{' '}
            {/* <label className={s.label}>
          Пароль
          <input
            className={s.formInput}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}
            <Button
              style={buttonStyle}
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
            >
              Вхід
            </Button>
          </form>{' '}
        </Paper>
      </Grid>
    </div>
  );
}
