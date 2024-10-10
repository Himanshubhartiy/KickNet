import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import InnerPage from "./InnerPage";
import Addcart from "./Addcart";
import Buynow from "./Buynow";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import VerifyEmail from "./VerifyEmail";

function App() {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || null
  );
  const [isEmailVerified, setIsEmailVerified] = useState(
    () => localStorage.getItem("emailVerified") === "true" || false
  );

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }

    localStorage.setItem("emailVerified", isEmailVerified);
  }, [username, isEmailVerified]);

  return (
    <Router>
      <Header username={username} setUsername={setUsername} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Card />
              <About />
              <Contact />
            </>
          }
        />
        <Route
          path="/login"
          element={
            username && isEmailVerified ? (
              <Navigate to="/" />
            ) : (
              <Login setUsername={setUsername} />
            )
          }
        />
        <Route
          path="/createaccount"
          element={
            username && isEmailVerified ? (
              <Navigate to="/" />
            ) : (
              <CreateAccount setUsername={setUsername} />
            )
          }
        />
        <Route
          path="/verifyemail"
          element={<VerifyEmail setIsEmailVerified={setIsEmailVerified} />}
        />
        <Route path="/addcart" element={<Addcart />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/innerpage/:id" element={<InnerPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
