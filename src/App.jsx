import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/products",
      element: (
        <Layout>
          <ProductsPage />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <Layout>
          <ProductDetails />
        </Layout>
      ),
    },
  ]);

  return <>{routes}</>;
}

export default App;
