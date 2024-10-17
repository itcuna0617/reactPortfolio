import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const loading = <div className="bg-red-500">loading...</div>;
const Main = lazy(() => import("../pages/MainComp"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
]);

export default root;
