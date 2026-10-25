import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={onBack}>← Back to Products</button>
      
      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="detail-rating">⭐ {product.rating}</p>
          <p className="detail-price">₱{product.price.toFixed(2)}</p>
          
          <div className="stock-info">
            {product.quantity > 5 ? (
              <p className="in-stock">✅ In Stock — {product.quantity} available</p>
            ) : (
              <p className="low-stock">⚠️ Low Stock — Only {product.quantity} left</p>
            )}
          </div>
          
          <div className="detail-section">
            <h4>Description</h4>
            <p>{product.fullDesc}</p>
          </div>
          
          <div className="detail-section">
            <h4>Specifications</h4>
            <p>{product.specs}</p>
          </div>
          
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
