// Layout.jsx
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
