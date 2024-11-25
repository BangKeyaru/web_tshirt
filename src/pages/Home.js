import Navbar from "../components/Navbar";
import SidebarKategori from "../components/SidebarKategori";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main-content">
        <SidebarKategori />
        <div className="content-area">
          <Banner />
          <h3>Kaos Game</h3>
          <ProductList />
        </div>
      </div>
      <Footer /> {/* Gunakan Footer di sini */}
    </div>
  );
};

export default Home;
