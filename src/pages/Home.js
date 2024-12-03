import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarKategori from "../components/SidebarKategori";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <SidebarKategori />
        <div className="content-area">
          <Banner />
          <h3>Kaos Game</h3>
          <ProductList />
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
