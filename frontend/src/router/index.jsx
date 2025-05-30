import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { CircularLoader } from "../components";
import Home from "../pages/Home";
import AppLogout from "./AppLogout";
import UIControls from "../ui-controls/UIControls";
import SignUp from "../modules/authentication/SignUp";

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<CircularLoader />}>
        <AppLogout />
        <Routes>
          {/* You can add more routes like this */}
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
          <Route index path="/home" element={<SignUp />} />
          
          <Route path="/uicomponents" element={<UIControls />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
