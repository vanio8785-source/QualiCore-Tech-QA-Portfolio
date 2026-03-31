import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">⬡</span>
              <span className="footer-logo-text">Quali<span>Core</span></span>
            </Link>
            <p className="footer-tagline">
              Your trusted source for premium computing hardware — built for realistic QA practice.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="GitHub">⌨</a>
              <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="#" className="footer-social" aria-label="Twitter">𝕏</a>
            </div>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=laptops">Laptops</Link></li>
              <li><Link to="/products?category=monitors">Monitors</Link></li>
              <li><Link to="/products?category=accessories">Accessories</Link></li>
              <li><Link to="/products?sort=newest">New Arrivals</Link></li>
              <li><Link to="/products?sort=bestRated">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="footer-col">
            <h4 className="footer-col-title">Account</h4>
            <ul className="footer-links">
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register">Create Account</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Information</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
            <div className="footer-contact-info">
              <span>📧 support@qualicoretech.com</span>
              <span>📞 0800 123 4567</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-badges">
            <span className="footer-badge">🔒 Secure Checkout</span>
            <span className="footer-badge">🚚 Free UK Delivery</span>
            <span className="footer-badge">↩ 14-Day Returns</span>
          </div>
          <p className="footer-copy">
            &copy; {year} QualiCore Tech. All rights reserved. For QA training and demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
