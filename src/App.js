import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Dashboard, Analytics, Admin } from "./pages";
import { NavBar } from "./components/NavBar";
import { ProtectedRoute } from "./components/ProtectedRoute";
export const App = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      user: "Bryan",
      permissions: ["analize"],
      roles: ["admin"],
    });
  }

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <NavBar />
      {
        !user ? (
          <button onClick={login}>Login</button>
        ) : 
        (
          <button onClick={logout}>Logout</button>
        )
      }
      <Routes>
        <Route index element={<Landing />}  />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={ !!user } />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/analytic" element={
          <ProtectedRoute isAllowed={ !!user && user.permissions.includes("analize") } redirectTo="/home">
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute isAllowed={ !!user && user.roles.includes("admin") }>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}