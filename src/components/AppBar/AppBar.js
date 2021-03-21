import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './AppBar.module.css';
//import { authSelectors } from '../redux/auth';

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.Header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
}

// {
//   isLoggedIn ? <UserMenu /> : <AuthNav />;
// }
