import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Store from "./pages/StorePage";
import About from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import { ShopCartProvider } from "./context/ShopCartContext";

const App = () => {
  return (
    <>
      <ShopCartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShopCartProvider>
    </>
  );
};

export default App;
