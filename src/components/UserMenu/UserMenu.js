import { useDispatch, useSelector } from 'react-redux';
//import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from './Avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const avatar = Avatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Привіт, </span>
      <button className={s.buttonSubmit} type="button">
        Вийти
      </button>
    </div>
  );
}
//onClick={() => dispatch(authOperations.logOut())}  {name}
