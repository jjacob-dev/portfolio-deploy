import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/portfolio-deploy/",
    element: <App />,
  },
  {
    path: "/portfolio-deploy/about",
    element: <About />,
  },
  {
    path: "/portfolio-deploy/blog",
    element: <Blog />,
  },
  {
    path: "/portfolio-deploy/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
