import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/Home/HomePage";
import Login from "./components/Auth/Login";

import SignUp from "./components/Auth/SignUp";
import MainLayOut from "./components/pages/MainLayOut";
import NotFound from "./components/pages/NotFound";
import ContactUs from "./components/contact/ContactUs";
import DashBoard from "./components/pages/DashBoard";
import FormSubmitted from "./components/pages/FormSubmitted";
import FeatureFullPage from "./components/pages/FeatureFullPage";
import Pricing from "./components/pages/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeatureFullPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="formsubmit" element={<FormSubmitted />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
