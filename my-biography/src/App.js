import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./pages/Root.js";

const HomePage = lazy(() => import("./pages/Home.js"));
const RelatePage = lazy(() => import("./pages/Relate.js"));


function LoadingSpinner() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "1.2rem",
      color: "#667eea"
    }}>
      <div className="spinner"></div>
      <p style={{ marginRight: "1rem" }}>در حال بارگذاری...</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/relate', element: <RelatePage /> }
      ]
    }
  ]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;