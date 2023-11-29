import { Routes, Route } from "react-router-dom";

import { Layout } from "@/components/Layout";

export function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
