// Footer.js
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Help & FAQs | Hubungi Kami</p>
    </footer>
  );
};

export default Footer;

// App.js atau component utama
const App = () => {
  return (
    <div className="flex-wrapper">
      <div className="content">{/* Konten utama aplikasi */}</div>
      <Footer />
    </div>
  );
};
