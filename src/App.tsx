import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/pages/admin/dashboard";
import Products from "@/pages/admin/products";
import Tasks from "@/pages/admin/tasks";
import Goals from "@/pages/admin/goals";
import { Layout } from "@/layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="root" />} />
          <Route path="/root" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mytasks" element={<Tasks />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
