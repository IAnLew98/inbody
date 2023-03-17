import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeUse from "./components/HomeUse";
import AboutUs from "./nav/AboutUs";
import Product from "./nav/Prdoduct";
import Technology from "./nav/Technology";
import Support from "./nav/Support";
import ContactUs from "./nav/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
  <BrowserRouter>

    <NavBar />
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/AboutUs" element={<AboutUs />}/> 
      <Route path="/HomeUse" element={<HomeUse />}/>  
      <Route path="/Product" element={<Product />}/>  
      <Route path="/Technology" element={<Technology />}/>  
      <Route path="/Support" element={<Support />}/>  
      <Route path="/ContactUs" element={<ContactUs />}/>  
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>  
      
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
