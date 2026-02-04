import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header>
      <Navigation />
      {isLoggedIn && !isRefreshing ? (
        <UserMenu />
        ) : (
        <AuthNav />
        )}
    </header>
  );
}