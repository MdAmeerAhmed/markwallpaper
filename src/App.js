
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Aboutus from './page/Aboutus';
import Services from './page/Services';
import ContactUs from './page/ContactUs';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Project from './page/Project';
import Gallery from './page/Gallery';
import Faq from './page/Faq';
import Error from './Component/Error';
import Wallpapers from "./page/ServicesPages/Wallpapers";
import Blinds from "./page/ServicesPages/Blinds";
import Kidroom from "./page/ServicesPages/Kidroom";
import CustomWallpaper from "./page/ServicesPages/CustomWallpaper";
import Wardrobe from "./page/ServicesPages/Wardrobe";
import ModularKitchen from "./page/ServicesPages/ModularKitchen";
import WallpaperProject from "./page/ProjectPages/WallpaperProject";
function App() {
    
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="Wallpapers" element={<Wallpapers />} />
          <Route path="kidsroom" element={<Kidroom />} />
          <Route path="customized-wallpapers" element={<CustomWallpaper />} />
          <Route path="wardrobe" element={<Wardrobe />} />
          <Route path="modular-kitchens" element={<ModularKitchen />} />
          <Route path="blinds" element={<Blinds />} />
          <Route path="project" element={<Project />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="wallpaper-project" element={<WallpaperProject/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
