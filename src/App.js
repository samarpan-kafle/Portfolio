import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Internet from "./pages/Internet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path={"contact"} element={<>
              <Header />
              <Contact
               />
            </>} />
        <Route path={"services"} element={<>
              <Header />
              <Services />
            </>} />
        <Route path="about" element={
          <>
          <Header />
          <About />
        </>
        } />
        <Route path="internet" element={
          <>
          <Header />
          <Internet />
        </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
