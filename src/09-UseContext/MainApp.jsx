import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./Login";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element= { <LoginPage/>}/> */}
        <Route path="/*" element={<Navigate to="/about " />} />
      </Routes>
    </>
  );
};
