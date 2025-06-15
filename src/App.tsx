import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/menu";
import Home from "./screens/home";
import FloatingButtons from "./components/floatingButtons";
import Brevemente from "./screens/soon";

function App() {
  const location = useLocation();
  return (
    <div className="container">
      {location.pathname !== "/brevemente" && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brevemente" element={<Brevemente />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {/* <Footer /> */}
      <FloatingButtons />
    </div>
  );
}

export default App;
