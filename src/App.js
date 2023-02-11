import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Login from "./components/Login/Login";
import ProjectPage from "./Pages/ProjectPage";
import "./css/main.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";

const dummyData = {
  id: 0,
  imgURL:
    "https://files.globalgiving.org/pfil/54436/pict_large.jpg?m=1634727467000",
  title: "Provide Urgent Medical Attention To Syrians",
  tag: "Physical Health",
  location: "Syrian Arab Republic",
  author: "SEMA INSANI VE TIBBI YARDIM DERNEGI",
  description:
    "This campaign aims to support URGENT medical needs of those most in need in northern Syria through supporting our hospitals, medical centers and mobile clinics located there",
  raisedAmount: 50250,
  goalAmount: 100000,
  summary:
    "This campaign aims to support URGENT medical needs of those most in need in northern Syria through supporting our hospitals, medical centers and mobile clinics located there",
  donors: 1295,
  challenge:
    "Displaced people in Northern Syria spend their days time from dawn till sunset in their temporary tents. With the daily attempts to secure their basic food needs. Those families only have their health to support their families and take care of their children, but what if the breadwinner was a woman?! Your generosity for one displaced person mean you supported a whole family, gave much hope for them, and helped them maintain a good health.",
  solution:
    "SEMA operates now 21 health facilities and 8 mobile clinics inside Syria and reaches more than 700,000 beneficiaries on a yearly basis. Through our programs, we aim at reaching every person in need with health services in the areas where we work. Reducing the suffering of the most vulnerable is our main objective to which we are always committed.",
  impact:
    "Through this campaign SEMA aims to support URGENT medical need for 5000 displaced Syrian patients by providing primary health care services, emergency services, high-quality surgeries, treating patients who suffer from heart diseases, hypertension or diabetes and the treating the patients in the intensive care unit.",
  resources: [
    "https://www.sema-sy.org",
    "Our Website",
    "Our Facebook Page",
    "Our YouTube channel",
  ],
  organization: "SEMA INSANI VE TIBBI YARDIM DERNEGI",
};

function App() {
  const authenticated = true;
  return (
    <div className="App">
      <Router>
        {authenticated && <Navbar />}
        <Routes>
          <Route
            path="/home"
            element={authenticated ? <HomePage /> : <Navigate to="/login" />}
          />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
