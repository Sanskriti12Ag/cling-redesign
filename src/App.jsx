import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Work from './sections/Work';
import Products from './sections/Products';
import Industries from './sections/Industries';
import Innovation from './sections/Innovation';
import Leadership from './sections/Leadership';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import About from './sections/About';

function App() {
  return (
    <main>
      <Hero />
      <Stats />

      <div id="services">
        <Services />
      </div>

      <div id="work">
        <Work />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="industries">
        <Industries />
      </div>

<div id="about">
  <About />
</div>

      <div id="innovation">
        <Innovation />
      </div>

      <div id="leadership">
        <Leadership />
      </div>

      <div id="trust">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;