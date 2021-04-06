import { Switch } from 'react-router';
import Appbar from '../src/components/AppBar/AppBar';
import Container from '../src/components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import authOperations from '../src/redux/auth/auth-operations';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import PublicRoute from '../src/components/PublicRoute/PublicRoute';
import authSelectors from '../src/redux/auth/auth-selectors';

const Home = lazy(() =>
  import('../src/view/Home/Home' /* webpackChunkName: "home-page" */),
);

const Contacts = lazy(() =>
  import(
    '../src/view/Contacts/Contacts' /* webpackChunkName: "contacts-page" */
  ),
);

const Register = lazy(() =>
  import(
    '../src/view/Register/Register' /* webpackChunkName: "register-page" */
  ),
);

const Login = lazy(() =>
  import('../src/view/Login/Login' /* webpackChunkName: "login-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Container>
          <Appbar />
          <Switch>
            <Suspense fallback={<p>Завантаження...</p>}>
              <PublicRoute exact path="/">
                <Home />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <Register />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <Login />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Container>
      </>
    )
  );
}
