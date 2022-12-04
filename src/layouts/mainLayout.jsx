import { Header } from "../components/header";
import { BottomNavBar } from "../components/bottomNavBar";
export function MainLayout({ children, user }) {
  return (
    <>
      <Header />
      {children}
      {user ? <BottomNavBar /> : null}
    </>
  );
}
