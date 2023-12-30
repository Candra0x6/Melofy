import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/element/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/authentication/Login";
import Cover from "./pages/authentication/Cover";
import Signup from "./pages/authentication/Signup";

function App() {
  const ac = localStorage.getItem("access_token");

  const simpleauth = (): boolean => {
    return ac ? true : false;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={simpleauth() ? <HomePage /> : <Cover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
