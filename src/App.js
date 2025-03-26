import React from "react";
import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // eslint-disable-line no-use-before-define
import Tournaments from "./components/Tournaments";
import NearbyClubs from "./components/NearbyClubs";
import Newsletter from "./components/Newsletter";
import Results from "./components/Results";
import Register from "./components/Register";
import Login from "./components/Login";
import { createContext } from "react";

export const ContextData = createContext(false);

function App() {
  const [data, setData] = useState(false);
  // const data = "";
  return (
    // <LoginContext.Provider value={{ user, setUser }}>
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Home />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/about"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <About />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/nearby-clubs"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <NearbyClubs />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/tournaments"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Tournaments />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/newsletter"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Newsletter />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/results"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Results />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/register"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Register />
              </ContextData.Provider>
            }
          />{" "}
          <Route
            exact
            path="/login"
            element={
              <ContextData.Provider value={{ data, setData }}>
                <Login />
              </ContextData.Provider>
            }
          />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
    // </LoginContext.Provider>
  );
}

export default App;
