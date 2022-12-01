import { Header } from "../components/header";
export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
