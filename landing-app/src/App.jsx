import React from "react";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./pages/About"; // 👈 import the About page

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}>
      <SignedOut>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SignIn />
        </div>
      </SignedOut>

      <SignedIn>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </SignedIn>
    </div>
  );
}
