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

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<CircularLoader />}>
        <AppLogout />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* You can add more routes like this */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
