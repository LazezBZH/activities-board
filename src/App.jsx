import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const User = lazy(() => import("./pages/User/User"));
const AdminLog = lazy(() => import("./pages/AdminLog/AdminLog"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Error = lazy(() => import("./pages/Error/Error"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminLog" element={<AdminLog />} />
          <Route path="/:id" element={<User />} />
          <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
