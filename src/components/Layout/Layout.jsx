import { AppBar } from '../AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};