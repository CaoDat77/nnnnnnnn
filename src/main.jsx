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
import AboutCheff from "./page/AboutCheff";
import AboutRes from "./page/AboutRes";
import Blog from "./page/Blog";
import ContactPage from "./page/ContactPage";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Order from "./page/Order";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="home" element={<Home />} />
    <Route path="*" element={<div>Page not found</div>}></Route>
    <Route path="aboutRes" element={<AboutRes />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="aboutCheff" element={<AboutCheff />} />
    <Route path="menu" element={<Menu />} />
    <Route path="blog" element={<Blog />} />
    <Route path="order" element={<Order />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
