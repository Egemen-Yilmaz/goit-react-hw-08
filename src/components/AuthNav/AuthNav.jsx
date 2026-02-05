import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={styles.link}>Register</NavLink>
      <span className={styles.sep}>|</span>
      <NavLink to="/login" className={styles.link}>Login</NavLink>
    </div>
  );
};

export default AuthNav;