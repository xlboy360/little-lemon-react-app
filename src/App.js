import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
