import { Switch } from 'react-router';
import Contacts from '../src/view/Contacts/Contacts';
import AppBar from '../src/components/AppBar/AppBar';
import Container from '../src/components/Container/Container';
import Register from '../src/view/Register/Register';
import Login from '../src/view/Login/Login';
import Home from '../src/view/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from '../src/redux/auth/auth-operations';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import PublicRoute from '../src/components/PublicRoute/PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <Register />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/">
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
}
