import React from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <Loader />
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </>
);
