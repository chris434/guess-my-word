import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { userChange } from "../firebase/firebaseAuth.js";
import { userProviderState } from "../providers/userProvider";
import { MainLayout } from "../layouts/mainLayout";
export function ProtectedRoute({ isPrivate, children }) {
  const { user, setUser } = userProviderState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    userChange(setUser, setLoading);
  }, []);

  if (loading)
    return (
      <MainLayout user={user}>
        <div> loading...</div>;
      </MainLayout>
    );

  if (!isPrivate && user) return <Navigate to={"/"} />;

  if (isPrivate && !user) return <Navigate to={"/login"} />;

  return <MainLayout user={user}>{children}</MainLayout>;
}
