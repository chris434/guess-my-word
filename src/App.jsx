import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./ views/signUp";
import { Login } from "./ views/login";
import { MainPage } from "./ views/mainPage";
import { ProtectedRoute } from "./components/protectedRoute";
import { UserProvider } from "./providers/userProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase.config.js";
// import dotEnv from "dotenv";
// dotEnv.config();

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route
            path="/sign-up"
            element={
              <ProtectedRoute isPrivate={false}>
                <SignUp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute isPrivate={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isPrivate={true}>
                <MainPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
