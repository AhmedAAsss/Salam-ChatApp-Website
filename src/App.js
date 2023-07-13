import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Download from "./pages/Download/Download";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/Contact_us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
