import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { CircularLoader } from "../components";
import Home from "../pages/Home"; // (not used right now)
import AppLogout from "./AppLogout";
import UIControls from "../ui-controls/UIControls";
import SignUp from "../modules/authentication/components/SignUp";
import HomePage from "../modules/home/components/HomePage";
import Landing from "../modules/authentication/container"
import SignIn from "../modules/authentication/components/SignIn";

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<CircularLoader />}>
        <AppLogout />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/uicomponents" element={<UIControls />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
