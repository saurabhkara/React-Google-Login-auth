import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import Dashboard from "./Dashboard";
import PageNotfound from "./PageNotfound";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const GoogleAuhProvider = () => {
    return (
      <GoogleOAuthProvider clientId="">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuhProvider />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
