import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/element/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/authentication/Login";
import Cover from "./pages/authentication/Cover";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Cover />} />
      </Routes>
    </Router>
  );
}

export default App;
