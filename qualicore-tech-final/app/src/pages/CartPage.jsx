import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useToast } from '../hooks/useToast'
import './CartPage.css'

const SHIPPING = 5.99
const FREE_SHIPPING_THRESHOLD = 50

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getSubtotal, getCartCount } = useCart()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const subtotal = getSubtotal()
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING
  const total = subtotal + shipping

  const handleRemove = (item) => {
    removeFromCart(item.id)
    addToast(`${item.name} removed from cart`, 'info')
    console.log('[Cart] Removed item:', item.name)
  }

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty-state" style={{ minHeight: '60vh' }}>
          <div className="empty-state-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="btn btn-primary btn-lg">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{getCartCount()} item{getCartCount() !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="container cart-layout">
        {/* Items */}
        <div className="cart-items">
          <div className="cart-items-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          {cart.map(item => (
            <div key={item.id} className="cart-item" data-testid="cart-item">
              <div className="cart-item-product">
                <Link to={`/products/${item.slug}`} className="cart-item-img-link">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                    onError={e => { e.target.src = 'https://placehold.co/80x60/0f1629/4a5a70?text=?' }}
                  />
                </Link>
                <div className="cart-item-info">
                  <Link to={`/products/${item.slug}`} className="cart-item-name">{item.name}</Link>
                  <span className="cart-item-brand">{item.brand}</span>
                  <span className="cart-item-sku">SKU: {item.sku}</span>
                </div>
              </div>

              <span className="cart-item-price">£{item.price.toFixed(2)}</span>

              <div className="qty-selector cart-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  data-testid="cart-qty-decrease"
                >−</button>
                <span className="qty-val" data-testid="cart-qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  data-testid="cart-qty-increase"
                >+</button>
              </div>

              <span className="cart-item-subtotal">
                £{(item.price * item.quantity).toFixed(2)}
              </span>

              <button
                className="cart-item-remove"
                onClick={() => handleRemove(item)}
                aria-label="Remove item"
                data-testid="cart-remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary" data-testid="cart-summary">
          <h3 className="cart-summary-title">Order Summary</h3>

          <div className="cart-summary-rows">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span data-testid="cart-subtotal">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="free-shipping">FREE</span> : `£${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="free-shipping-note">
                Add £{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
          </div>

          <hr className="divider" />

          <div className="cart-summary-total">
            <span>Total</span>
            <span data-testid="cart-total">£{total.toFixed(2)}</span>
          </div>

          <button
            className="btn btn-primary btn-lg cart-checkout-btn"
            onClick={() => navigate('/checkout')}
            data-testid="checkout-btn"
          >
            Proceed to Checkout →
          </button>

          <Link to="/products" className="btn btn-ghost btn-lg cart-continue-btn">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
