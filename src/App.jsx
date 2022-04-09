import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserMenu from "./components/UserMenu/UserMenu";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h1 className="wrong-address">There's nothing here: 404!</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
