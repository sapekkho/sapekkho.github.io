import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Download from './pages/Download';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Legal';
import Changelog from './pages/Changelog';
import OAuthRedirect from './pages/OAuthRedirect';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

function App() {
  const location = useLocation();
  const isRedirectPage = location.pathname === '/redirect';

  return (
    <>
      {isRedirectPage ? (
        <Routes>
          <Route path="/redirect" element={<OAuthRedirect />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Download />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
