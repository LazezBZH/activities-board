import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const User = lazy(() => import("./pages/User/User"));
const Error = lazy(() => import("./pages/Error/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
