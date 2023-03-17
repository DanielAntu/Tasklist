import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         Element: <Home />,
//     },
//     {
//         path: "/edit",
//         element: <Edit />,
//     },
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        Element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/edit",
                element: <Edit />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
