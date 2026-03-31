import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'
import { useAuth } from '../../hooks/useAuth'
import './Header.css'

export default function Header() {
  const { badgeCount } = useCart()
  const { getWishlistCount } = useWishlist()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('[Search] Query submitted:', searchQuery)
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  const navLinks = [
    { to: '/products', label: 'Products' },
    { to: '/products?category=laptops', label: 'Laptops' },
    { to: '/products?category=monitors', label: 'Monitors' },
    { to: '/products?category=accessories', label: 'Accessories' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">⬡</span>
             <span className="logo-text">
              Quali<span className="logo-accent">Core</span>
            </span>
          </Link>

          {/* Search */}
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="header-search-input"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            <button type="submit" className="header-search-btn" aria-label="Submit search">
              <SearchIcon />
            </button>
          </form>

          {/* Actions */}
          <div className="header-actions">
            {/* Wishlist */}
            <Link to="/wishlist" className="header-action-btn" aria-label="Wishlist">
              <HeartIcon />
              {getWishlistCount() > 0 && (
                <span className="action-badge">{getWishlistCount()}</span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="header-action-btn" aria-label="Shopping cart">
              <CartIcon />
              {badgeCount > 0 && (
                <span className="action-badge">{badgeCount}</span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <div className="user-menu-wrap" ref={userMenuRef}>
                <button
                  className="header-action-btn user-btn"
                  onClick={() => setUserMenuOpen(v => !v)}
                  aria-label="Account menu"
                >
                  <span className="user-avatar">{user.firstName?.[0] || user.email?.[0] || 'U'}</span>
                </button>
                {userMenuOpen && (
                  <div className="user-dropdown">
                    <div className="user-dropdown-info">
                      <span className="user-name">{user.firstName || 'Account'}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                    <hr className="user-dropdown-divider" />
                    <button onClick={() => { logout(); setUserMenuOpen(false) }} className="user-dropdown-item">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline btn-sm header-login-btn">
                Sign In
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container header-nav-inner">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to.split('?')[0] ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}
