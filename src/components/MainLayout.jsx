import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export const MainLayout = () => {
  return (
    <div style={{ margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
