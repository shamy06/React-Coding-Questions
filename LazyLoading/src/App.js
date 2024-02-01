import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const Product = lazy(() => import("./Components/Product"));

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Suspense fallback={<div>"Loading..."</div>}>
            <Product/>
          </Suspense>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
