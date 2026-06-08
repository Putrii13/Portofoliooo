import React from 'react';
import { createHashRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "project/:id", Component: ProjectDetail },
    ],
  },
]);
