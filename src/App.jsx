import { Route, Routes } from "react-router-dom";
import { SignUp } from "./ views/signUp";
import { Login } from "./ views/login";
import { MainPage } from "./ views/mainPage";
import { ProtectedRoute } from "./components/protectedRoute";
import { UserProvider } from "./providers/userProvider";
import { MainLayout } from "./layouts/mainLayout";

function App() {
  return (
    <div className="App">
      <UserProvider>
        {/* <MainLayout> */}
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
        {/* </MainLayout> */}
      </UserProvider>
    </div>
  );
}

export default App;
