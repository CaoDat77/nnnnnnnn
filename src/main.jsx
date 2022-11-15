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
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="home" element={<Home />} />
    <Route path="*" element={<div>Page not found</div>}></Route>
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="menu" element={<Contact />} />
    <Route path="blog" element={<Contact />} />
    <Route path="order" element={<Contact />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
