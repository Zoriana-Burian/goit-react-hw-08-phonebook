import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';
import FaceIcon from '@material-ui/icons/Face';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <FaceIcon />
      <span className={s.name}>Привіт, {name}</span>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вийти
      </Button>
    </div>
  );
}
