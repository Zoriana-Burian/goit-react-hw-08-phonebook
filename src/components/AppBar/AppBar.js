import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './AppBar.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { AppBar, Container, Toolbar } from '@material-ui/core';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar>
      <Container>
        <Toolbar className={s.Header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
