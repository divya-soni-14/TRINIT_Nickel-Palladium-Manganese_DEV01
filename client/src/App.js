import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import "./css/main.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  const authenticated = false;
  return (
    <div className="App">
      <Router>
        {authenticated && <Navbar />}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route
            path="/login"
            element={!authenticated ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/register"
            element={!authenticated ? <Register /> : <Navigate to="/home" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
