import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'
import { useToast } from '../../hooks/useToast'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToast } = useToast()
  const [imgError, setImgError] = useState(false)

  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (product.stock === 0) return
    addToCart(product, 1)
    addToast(`${product.name} added to cart`, 'success')
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    if (inWishlist) {
      removeFromWishlist(product.id)
      addToast(`${product.name} removed from wishlist`, 'info')
    } else {
      addToWishlist(product)
      addToast(`${product.name} added to wishlist`, 'success')
    }
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null

  return (
    <Link to={`/products/${product.slug}`} className="product-card" data-testid="product-card">
      {/* Image */}
      <div className="product-card-img-wrap">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="product-img-fallback">
            <span>🖥️</span>
          </div>
        )}

        {/* Badges */}
        <div className="product-card-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {product.bestSeller && <span className="badge badge-bestseller">Best Seller</span>}
          {discount && <span className="badge badge-sale">-{discount}%</span>}
          {product.stock > 0 && product.stock <= 3 && !discount && <span className="badge badge-sale">Sale</span>}
        </div>

        {/* Wishlist button */}
        <button
          className={`product-wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          data-testid="wishlist-btn"
        >
          {inWishlist ? '♥' : '♡'}
        </button>
      </div>

      {/* Info */}
      <div className="product-card-info">
        <p className="product-card-brand">{product.brand}</p>
        <h3 className="product-card-name">{product.name}</h3>

        {/* Rating */}
        <div className="rating">
          <div className="stars">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`star ${i <= Math.round(product.rating) ? '' : 'star-empty'}`}>★</span>
            ))}
          </div>
          <span className="rating-count">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="product-card-footer">
          <div className="price-group">
            <span className="price price-current">£{product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="price price-old">£{product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          {product.stock === 0 ? (
            <span className="badge badge-out">Out of Stock</span>
          ) : (
            <button
              className="btn btn-primary btn-sm add-to-cart-btn"
              onClick={handleAddToCart}
              data-testid="add-to-cart-btn"
            >
              + Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}
