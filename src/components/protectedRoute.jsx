import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { userChange } from "../firebase/firebaseAuth.js";
import { userProviderState } from "../providers/userProvider";
import { Header } from "../components/header";
export function ProtectedRoute({ isPrivate, children }) {
  const { user, setUser } = userProviderState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    userChange(setUser, setLoading);
  }, []);

  if (loading) return <div> loading...</div>;

  if (!isPrivate && user) return <Navigate to={"/"} />;

  if (isPrivate && !user) return <Navigate to={"/login"} />;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
