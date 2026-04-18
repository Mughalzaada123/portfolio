import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Loader from "./components/Loader";
import WhatsAppWidget from "./components/WhatsAppWidget";
import { AppReadyContext } from "./context/AppReadyContext";

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Signal loader to start fading at 2.5s
    const fadeTimer = setTimeout(() => setLoaderDone(true), 2500);

    // Unmount loader and reveal app at 3s (after 0.5s fade)
    const removeTimer = setTimeout(() => {
      setLoaderVisible(false);
      setAppReady(true); // ← Hero and other sections now start animations
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Loader sits on top while visible */}
      {loaderVisible && <Loader done={loaderDone} />}

      {/* Main app always mounted so React tree is ready, but invisible until loader exits */}
      <AppReadyContext.Provider value={appReady}>
        <div
          className="relative w-full"
          style={{
            opacity: appReady ? 1 : 0,
            transition: appReady ? 'opacity 0.4s ease' : 'none',
            pointerEvents: appReady ? 'auto' : 'none',
          }}
        >
          <Navbar />
          <AppRoutes />
          <ThemeCustomizer />
          <WhatsAppWidget />
        </div>
      </AppReadyContext.Provider>
    </BrowserRouter>
  );
}

export default App;