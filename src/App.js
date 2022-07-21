import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { useState } from "react";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              isAuthLoading={isAuthLoading}
              setIsAuthLoading={setIsAuthLoading}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <RegistrationPage
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
