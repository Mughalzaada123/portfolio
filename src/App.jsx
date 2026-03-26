import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

function App() {
return ( 
<BrowserRouter> 
<TopHeader />
<Navbar /> 
<AppRoutes /> 
<Footer/>
</BrowserRouter>
);
}

export default App;