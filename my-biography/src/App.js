import { createHashRouter, RouterProvider } from "react-router-dom"; 
import { lazy, Suspense } from "react";
import RootLayout from "./pages/Root.js";

const HomePage = lazy(() => import("./pages/Home.js"));
const RelatePage = lazy(() => import("./pages/Relate.js"));

function LoadingFallback() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      در حال بارگذاری...
    </div>
  );
}

function App() {
  const router = createHashRouter([

    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/relate", element: <RelatePage /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
