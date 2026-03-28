import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'
import { useToast } from '../hooks/useToast'
import ProductCard from '../components/product/ProductCard'
import allProducts from '../data/products.json'
import './ProductDetailsPage.css'

const PDP_OVERRIDES = {
  2: { specs: { ...allProducts.find(p => p.id === 2)?.specs, RAM: '4GB DDR4' } },
  3: { pdpImageBroken: true },
  6: { pdpTitle: 'Apple MacBoook Air 13 M2' },
}

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToast } = useToast()

  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(t)
  }, [slug])

  if (slug === 'all') {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>Page Not Found</h3>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/products" className="btn btn-primary">Go to Products</Link>
        </div>
      </div>
    )
  }

  const baseProduct = allProducts.find(p => p.slug === slug)

  if (!loading && !baseProduct) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="empty-state">
          <div className="empty-state-icon">😕</div>
          <h3>Product Not Found</h3>
          <p>This product doesn't exist or may have been removed.</p>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    )
  }

  if (loading || !baseProduct) {
    return (
      <div className="container pdp-skeleton-wrap">
        <div className="pdp-skeleton-img skeleton" />
        <div style={{ flex: 1 }}>
          <div className="skeleton" style={{ height: 32, marginBottom: 16, width: '70%' }} />
          <div className="skeleton" style={{ height: 20, marginBottom: 12, width: '50%' }} />
          <div className="skeleton" style={{ height: 20, width: '40%' }} />
        </div>
      </div>
    )
  }

  const override = PDP_OVERRIDES[baseProduct.id] || {}
  const product = {
    ...baseProduct,
    specs: override.specs ?? baseProduct.specs,
  }
  const displayTitle = override.pdpTitle ?? product.name
  const imgBroken = override.pdpImageBroken ?? false

  const inWishlist = isInWishlist(product.id)
  const related = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (product.stock === 0) return
    addToCart(product, quantity)
    addToast(`${product.name} added to cart`, 'success')
  }

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
      addToast(`Removed from wishlist`, 'info')
    } else {
      addToWishlist(product)
      addToast(`${product.name} added to wishlist`, 'success')
    }
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null

  const images = imgBroken
    ? ['https://this-image-does-not-exist-xyz.com/broken.jpg', ...product.gallery.slice(1)]
    : product.gallery

  return (
    <div className="pdp-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep">›</span>
          <Link to={`/products?category=${product.category}`} className="capitalize">{product.category}</Link>
          <span className="breadcrumb-sep">›</span>
          <span>{displayTitle}</span>
        </nav>

        <div className="pdp-layout">
          <div className="pdp-gallery">
            <div className="pdp-main-img-wrap">
              <img
                src={images[activeImg] || product.image}
                alt={displayTitle}
                className="pdp-main-img"
                onError={e => {
                  e.target.src = 'https://placehold.co/600x400/0f1629/4a5a70?text=Image+Unavailable'
                }}
              />
              {discount && (
                <span className="pdp-discount-badge">-{discount}%</span>
              )}
            </div>
            {images.length > 1 && (
              <div className="pdp-thumbnails">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`pdp-thumb ${activeImg === i ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      onError={e => { e.target.src = 'https://placehold.co/80x60/0f1629/4a5a70?text=?' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pdp-info">
            <div className="pdp-brand-row">
              <span className="pdp-brand">{product.brand}</span>
              {product.isNew && <span className="badge badge-new">New</span>}
              {product.bestSeller && <span className="badge badge-bestseller">Best Seller</span>}
            </div>

            <h1 className="pdp-title">{displayTitle}</h1>

            <div className="pdp-rating-row">
              <div className="rating">
                <div className="stars">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`star ${i <= Math.round(product.rating) ? '' : 'star-empty'}`}>★</span>
                  ))}
                </div>
                <span className="pdp-rating-val">{product.rating}</span>
                <span className="rating-count">({product.reviews} reviews)</span>
              </div>
              <span className="pdp-sku">SKU: {product.sku}</span>
            </div>

            <div className="pdp-price-row">
              <span className="price price-current pdp-price">£{product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="price price-old">£{product.oldPrice.toFixed(2)}</span>
              )}
          {discount && (
                <span className="badge badge-sale">Save £{(product.oldPrice - product.price).toFixed(2)}</span>
              )}
            </div>

            <p className="pdp-short-desc">{product.shortDescription}</p>

            <div className="pdp-stock-row">
            {product.stock > 0 ? (
                <span className="pdp-stock in-stock">
                  <span className="stock-dot" /> In Stock
                </span>
              ) : (
                <span className="pdp-stock out-stock">
                  <span className="stock-dot out" /> Out of Stock
                </span>
              )}
            </div>

            <div className="pdp-actions">
              <div className="qty-selector">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  data-testid="qty-decrease"
                >−</button>
                <span className="qty-val" data-testid="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  disabled={quantity >= product.stock}
                  data-testid="qty-increase"
                >+</button>
              </div>
              <button
                className="btn btn-primary btn-lg pdp-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                data-testid="pdp-add-to-cart"
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button
                className={`btn pdp-wishlist-btn ${inWishlist ? 'btn-danger' : 'btn-ghost'}`}
                onClick={handleWishlist}
                data-testid="pdp-wishlist-btn"
              >
                {inWishlist ? '♥' : '♡'}
              </button>
            </div>

            <div className="pdp-trust-row">
              <span>🚚 Free UK Delivery</span>
              <span>↩ 14-Day Returns</span>
              <span>🔒 Secure Payment</span>
            </div>
          </div>
        </div>

        <div className="pdp-tabs-section">
          <div className="pdp-tabs">
            <div className="pdp-tab active">Description</div>
          </div>
          <div className="pdp-tab-content">
            <p className="pdp-description">{product.description}</p>
          </div>
        </div>

        <div className="pdp-specs-section">
          <h3 className="pdp-specs-title">Specifications</h3>
          <table className="specs-table" data-testid="specs-table">
            <tbody>
              {Object.entries(product.specs).map(([key, val]) => (
                <tr key={key}>
                  <td className="spec-key">{key}</td>
                  <td className="spec-val">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {related.length > 0 && (
          <div className="pdp-related">
            <h3 className="pdp-related-title">Related Products</h3>
            <div className="product-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
