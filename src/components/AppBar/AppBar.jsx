import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import styles from './AppBar.module.css';

const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={styles.appbar}>
      <div className={styles.brand}>
        <Navigation />
      </div>
      <div className={styles.actions}>
        {isLoggedIn && !isRefreshing ? (
          <UserMenu />
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
}

export default AppBar;