import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader plays for 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Global Initial Loading Screen */}
      {loading && <Loader />}

      {/* Main App (hidden until loading finishes so that animations trigger smoothly afterwards) */}
      {!loading && (
        <div className="relative w-full">
          <Navbar />
          <AppRoutes />
          <ThemeCustomizer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;