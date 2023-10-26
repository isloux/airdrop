import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
