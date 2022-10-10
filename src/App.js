import { Routes, Route } from "react-router-dom";

import "./App.css";
import StartComponent from "./components/startComponent";
import Layout from "./layout/Layout";
import LoginPage from "./components/loginPage";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<p>XD</p>}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        {/* <Route path="/userProfile" element={<UserProfile />}></Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
