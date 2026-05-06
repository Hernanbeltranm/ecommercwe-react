import { useState } from 'react'

function ProductCard({ title, price, description, image }) {
  const [comprado, setComprado] = useState(false)
  const [verDetalle, setVerDetalle] = useState(false)

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {verDetalle && <p className="detalle">{description}</p>}
      <p className="price">${price}</p>
      <div className="card-buttons">
        <button
          className="btn-ver"
          onClick={() => setVerDetalle(!verDetalle)}
        >
          {verDetalle ? 'Ocultar' : 'Ver Producto'}
        </button>
        <button
          className={comprado ? 'btn-comprado' : 'btn-comprar'}
          onClick={() => setComprado(true)}
        >
          {comprado ? '¡Comprado!' : 'Comprar'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
