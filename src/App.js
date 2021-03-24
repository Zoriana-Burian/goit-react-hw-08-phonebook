import { Route, Switch } from 'react-router';
import Contacts from '../src/view/Contacts/Contacts';
import AppBar from '../src/components/AppBar/AppBar';
import Container from '../src/components/Container/Container';
import Register from '../src/view/Register/Register';
import Login from '../src/view/Login/Login';
import Home from '../src/view/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from '../src/redux/auth/auth-operations';

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
