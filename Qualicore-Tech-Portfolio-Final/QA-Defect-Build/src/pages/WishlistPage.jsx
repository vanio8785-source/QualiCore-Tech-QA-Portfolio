import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../hooks/useWishlist'
import { useCart } from '../hooks/useCart'
import { useToast } from '../hooks/useToast'
import './WishlistPage.css'

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { addToast } = useToast()

  const handleMoveToCart = (item) => {
    addToCart(item, 1)
    removeFromWishlist(item.id)
    addToast(`${item.name} moved to cart`, 'success')
  }

  const handleRemove = (item) => {
    removeFromWishlist(item.id)
    addToast(`${item.name} removed from wishlist`, 'info')
  }

  if (wishlist.length === 0) {
    return (
      <div className="container">
        <div className="empty-state" style={{ minHeight: '60vh' }}>
          <div className="empty-state-icon">♡</div>
          <h3>Your wishlist is empty</h3>
          <p>Save items you love to your wishlist and come back to them later.</p>
          <Link to="/products" className="btn btn-primary btn-lg">Browse Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wishlist-page">
      <div className="page-header">
        <div className="container">
          <h1>My Wishlist</h1>
          <p>{wishlist.length} saved item{wishlist.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="container">
        <div className="wishlist-grid">
          {wishlist.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="wishlist-item" data-testid="wishlist-item">
              <Link to={`/products/${item.slug}`} className="wishlist-item-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={e => { e.target.src = 'https://placehold.co/120x90/0f1629/4a5a70?text=?' }}
                />
              </Link>
              <div className="wishlist-item-info">
                <span className="wishlist-item-brand">{item.brand}</span>
                <Link to={`/products/${item.slug}`} className="wishlist-item-name">{item.name}</Link>
                <div className="price-group" style={{ marginTop: 6 }}>
                  <span className="price price-current">£{item.price.toFixed(2)}</span>
                  {item.oldPrice && <span className="price price-old">£{item.oldPrice.toFixed(2)}</span>}
                </div>
                {item.stock === 0 && <span className="badge badge-out" style={{ marginTop: 6 }}>Out of Stock</span>}
              </div>
              <div className="wishlist-item-actions">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleMoveToCart(item)}
                  disabled={item.stock === 0}
                  data-testid="wishlist-move-to-cart"
                >
                  Move to Cart
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item)}
                  data-testid="wishlist-remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
