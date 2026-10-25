type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, change: number) => void;
  onRemoveItem: (id: number) => void;
  onClose: () => void;
};

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClose }: CartProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="cart-card" onClick={(e) => e.stopPropagation()}>
        <div className="card-head">
          <h3>Your Cart</h3>
          <button className="close-x" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-text">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-row">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>Price: ₱{item.price.toFixed(2)}</p>
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                    <button className="remove" onClick={() => onRemoveItem(item.id)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total-line">
                <strong>Total:</strong>
                <strong>₱{totalPrice.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
