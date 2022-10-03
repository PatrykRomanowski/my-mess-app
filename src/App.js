import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";
import LoginPage from "./components/loginPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<p>XD</p>}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
