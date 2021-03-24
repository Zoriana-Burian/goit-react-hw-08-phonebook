import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Avatar from './Avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = Avatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Привіт, {name}</span>
      <button
        className={s.buttonSubmit}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вийти
      </button>
    </div>
  );
}
