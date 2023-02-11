import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Login from "./components/Login/Login";
import ProjectPage from "./Pages/ProjectPage";
import Register from "./components/Register";
import SearchPage from "./components/SearchPage";
import CreatePost from "./components/CreatePost";
import "./css/main.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import UserProfilePage from "./components/UserProfilePage";
import { dummyData, profileData, userProfileData } from "./data";

function App() {
  const authenticated = true;
  return (
    <div className="App">
      <Router>
        {authenticated && <Navbar />}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/createPost" element={<CreatePost />} />

          <Route
            path="/login"
            element={!authenticated ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/register"
            element={!authenticated ? <Register /> : <Navigate to="/home" />}
          />
          <Route
            path="/project-page"
            element={<ProjectPage project={dummyData} />}
          />
          <Route
            path="/profile-page"
            element={<ProfilePage profile={profileData} />}
          />
          <Route
            path="/user-profile-page"
            element={<UserProfilePage user={userProfileData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
