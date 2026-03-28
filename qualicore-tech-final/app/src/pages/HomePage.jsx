import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import products from '../data/products.json'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()

  const featured = products.filter(p => p.featured).slice(0, 4)
  const newArrivals = products.filter(p => p.isNew).slice(0, 4)

  const categories = [
    { name: 'Laptops', slug: 'laptops', icon: '💻', count: products.filter(p => p.category === 'laptops').length },
    { name: 'Desktop PCs', slug: 'desktops', icon: '🖥️', count: products.filter(p => p.category === 'desktops').length },
    { name: 'Monitors', slug: 'monitors', icon: '📺', count: products.filter(p => p.category === 'monitors').length },
    { name: 'Components', slug: 'components', icon: '🔧', count: products.filter(p => p.category === 'components').length },
    { name: 'Accessories', slug: 'accessories', icon: '🖱️', count: products.filter(p => p.category === 'accessories').length },
    { name: 'Storage / Networking', slug: 'storage', icon: '💾', count: products.filter(p => p.category === 'storage').length },
  ]

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">Smart Tech. Real QA Practice.</span>
            <h1 className="hero-headline">
              QualiCore<br />
              <span className="hero-accent">Tech</span>
            </h1>
            <p className="hero-sub">
              Discover top-rated laptops, monitors, and accessories. Built for realistic Manual QA testing practice.
            </p>
            <div className="hero-actions">
              
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/products/all')}
                data-testid="hero-cta"
              >
                Shop Now →
              </button>
              <Link to="/about" className="btn btn-ghost btn-lg">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-val">500+</span>
                <span className="hero-stat-label">Products</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-val">4.8★</span>
                <span className="hero-stat-label">Avg Rating</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-val">24hr</span>
                <span className="hero-stat-label">UK Dispatch</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-frame">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80"
                alt="Premium laptops and tech"
                className="hero-img"
              />
              <div className="hero-img-badge">
                <span>🔥</span>
                <div>
                  <p>Best Seller</p>
                  <p>MacBook Air M2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo strip */}
      <div className="promo-strip">
        <div className="container promo-strip-inner">
          <span>🚚 Free UK Delivery on orders over £50</span>
          <span className="promo-divider">|</span>
          <span>↩ 14-Day Returns</span>
          <span className="promo-divider">|</span>
          <span>🔒 Secure Checkout</span>
          <span className="promo-divider">|</span>
          <span>⭐ Price Match Guarantee</span>
        </div>
      </div>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Shop by <span>Category</span></h2>
              <p className="section-subtitle">Find exactly what you're looking for</p>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm">View All →</Link>
          </div>
          <div className="category-grid">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="category-card"
                data-testid={`category-${cat.slug}`}
              >
                <span className="category-icon">{cat.icon}</span>
                <div>
                  <h3 className="category-name">{cat.name}</h3>
                  <p className="category-count">{cat.count} products</p>
                </div>
                <span className="category-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured <span>Products</span></h2>
              <p className="section-subtitle">Our hand-picked selection of outstanding hardware</p>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm">View All →</Link>
          </div>
          <div className="product-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">New <span>Arrivals</span></h2>
                <p className="section-subtitle">Fresh stock just landed</p>
              </div>
              <Link to="/products?sort=newest" className="btn btn-ghost btn-sm">View All →</Link>
            </div>
            <div className="product-grid">
              {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Banner CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="home-banner">
            <div className="home-banner-content">
              <h2>Ready to upgrade your setup?</h2>
              <p>Browse our full range of laptops, monitors, and accessories. Something for every budget.</p>
              <Link to="/products" className="btn btn-primary btn-lg">Browse All Products</Link>
            </div>
            <div className="home-banner-img">
              <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" alt="Gaming monitor" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
