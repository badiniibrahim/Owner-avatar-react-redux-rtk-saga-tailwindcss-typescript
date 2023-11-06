import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;
