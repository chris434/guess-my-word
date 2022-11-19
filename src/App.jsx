import { Route, Routes } from "react-router-dom";
import { SignUp } from "./ views/signUp";
import Container from "react-bootstrap/container";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="m-3">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
