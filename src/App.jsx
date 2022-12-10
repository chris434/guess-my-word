import { Route, Routes } from "react-router-dom";
import { SignUp } from "./ views/signUp";
import { Login } from "./ views/login";
import { MainPage } from "./ views/mainPage";
import { CreateWord } from "./ views/createWord";
import { ProtectedRoute } from "./components/protectedRoute";
import { UserProvider } from "./providers/userProvider";

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
          <Route
            path="/createWord"
            element={
              <ProtectedRoute isPrivate={true}>
                <CreateWord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/game/:id"
            element={
              <ProtectedRoute isPrivate={true}>
                <div>lobby</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
