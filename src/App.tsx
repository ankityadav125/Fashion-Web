import Blog from "./components/Blog";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Feature />
      <Collection />
      <Blog />
      <Footer />

    </div>
  );
};

export default App;
