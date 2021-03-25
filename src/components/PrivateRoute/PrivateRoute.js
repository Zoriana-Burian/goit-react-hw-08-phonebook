import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrevateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
