import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
        onClick={() => onViewDetails(product)}
        style={{ cursor: 'pointer' }}
      />
      
      <h3 onClick={() => onViewDetails(product)} style={{ cursor: 'pointer' }}>
        {product.name}
      </h3>
      <p className="product-category">{product.category}</p>
      <p className="product-desc">{product.shortDesc}</p>
      <p className="product-price">₱{product.price.toFixed(2)}</p>
      <p className="product-rating">⭐ {product.rating}</p>
      
      <div className="card-buttons">
        <button onClick={() => onViewDetails(product)}>View Details</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
