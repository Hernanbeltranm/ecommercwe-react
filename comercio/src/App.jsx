import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <section>
      <Navbar />
      <section>
        <h1>Bienvenio hernan</h1>
        <h2>Your one-stop shop for all your needs</h2>
        <h3>Find everything you need in one place</h3>
      </section>

      <div className="products-grid">
        <ProductCard
          title="Laptop"
          price={2000}
          description="Laptop ultradelgada con procesador Intel Core i7, 16GB RAM y 512GB SSD."
          image="https://picsum.photos/seed/laptop/300/200"
        />
        <ProductCard
          title="Mouse Inalámbrico"
          price={50}
          description="Mouse ergonómico con sensor óptico de alta precisión y conexión Bluetooth."
          image="https://picsum.photos/seed/mouse/300/200"
        />
        <ProductCard
          title="Teclado Mecánico"
          price={100}
          description="Teclado mecánico RGB con switches Blue, ideal para gaming y programación."
          image="https://picsum.photos/seed/keyboard/300/200"
        />
      </div>

    </section>

  )
}


export default App
