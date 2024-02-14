import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import GithubProfile from "../Pages/GithubProfile";
import ProfilePage from "../Pages/ProfilePage";
import Nopage from "../Pages/Nopage";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Login from "../Pages/Login";
import HeaderTail from "../Pages/HeaderTail";
import ContactUs from "../Pages/ContactUs";
export default function Router() {
  return (
    <BrowserRouter>
      <HeaderTail />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Github" element={<GithubProfile />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="login" element={<Login />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
