import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./component/layout/Layout";
import AboutRes from "./page/AboutRes";
import ContactPage from "./page/ContactPage";
import Home from "./page/Home";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="home" element={<Home />} />
    <Route path="*" element={<div>Page not found</div>}></Route>
    <Route path="aboutRes" element={<AboutRes />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="menu" element={<ContactPage />} />
    <Route path="blog" element={<ContactPage />} />
    <Route path="order" element={<ContactPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
