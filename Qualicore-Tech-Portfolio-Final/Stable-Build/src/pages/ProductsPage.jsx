import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import allProducts from '../data/products.json'
import './ProductsPage.css'

const BRANDS = [...new Set(allProducts.map(p => p.brand))].sort()
const CATEGORIES = [...new Set(allProducts.map(p => p.category))]
const CATEGORY_LABELS = {
  laptops: 'Laptops',
  desktops: 'Desktop PCs',
  monitors: 'Monitors',
  components: 'Components',
  accessories: 'Accessories',
  storage: 'Storage / Networking',
}
const RATING_OPTIONS = [4, 3, 2, 1]

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [brand, setBrand] = useState('')
  const [maxPrice, setMaxPrice] = useState(2000)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest')

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const q = searchParams.get('search')
    if (q) setSearch(q)
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...allProducts]

    const searchTerm = search.trim()
    if (searchTerm) {
      const lower = searchTerm.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.shortDescription?.toLowerCase().includes(lower)
      )
    }

    if (category) {
      result = result.filter(p => p.category === category)
    }

    if (brand) {
      result = result.filter(p => p.brand === brand)
    }


    if (maxPrice < 2000) {
      result = result.filter(p => p.price <= maxPrice)
    }

    if (inStockOnly) {
      result = result.filter(p => p.stock > 0)
    }

    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating)
    }

    switch (sort) {
      case 'priceLow':
        result.sort((a, b) => a.price - b.price)
        break
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price)
        break
      case 'bestRated':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'nameAZ':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'nameZA':
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
    }

    return result
  }, [search, category, brand, maxPrice, inStockOnly, minRating, sort])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      if (search.trim()) next.set('search', search.trim())
      else next.delete('search')
      return next
    })
  }

  const clearFilters = () => {
    setSearch('')
    setCategory('')
    setBrand('')
    setMaxPrice(2000)
    setInStockOnly(false)
    setSort('newest')
    setSearchParams({})
  }

  const activeFilterCount = [category, brand, inStockOnly, maxPrice < 2000, minRating > 0].filter(Boolean).length

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>All Products</h1>
          <p>Browse our full range of laptops, desktops, monitors, components, accessories, and more</p>
        </div>
      </div>

      <div className="container products-layout">
        {/* Sidebar */}
        <aside className="filter-sidebar" data-testid="filter-sidebar">
          <div className="filter-sidebar-header">
            <h3>Filters</h3>
            {(activeFilterCount > 0 || search.trim()) && (
              <button className="btn btn-sm btn-ghost" onClick={clearFilters} data-testid="clear-filters-btn">
                Clear ({activeFilterCount + (search.trim() ? 1 : 0)})
              </button>
            )}
          </div>

          {/* Search */}
          <div className="filter-group">
            <label className="filter-label">Search</label>
            <form onSubmit={handleSearchSubmit} className="filter-search-form">
              <input
                type="text"
                className="form-input"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                data-testid="search-input"
              />
            </form>
          </div>

          {/* Category */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="filter-options">
              <label className="filter-option">
                <input type="radio" name="category" value="" checked={category === ''} onChange={() => setCategory('')} />
                <span>All Categories</span>
                <span className="filter-count">{allProducts.length}</span>
              </label>
              {CATEGORIES.map(cat => (
                <label key={cat} className="filter-option">
                  <input type="radio" name="category" value={cat} checked={category === cat} onChange={() => setCategory(cat)} data-testid={`category-${cat}`} />
                  <span className="capitalize">{CATEGORY_LABELS[cat] || cat}</span>
                  <span className="filter-count">{allProducts.filter(p => p.category === cat).length}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="filter-group">
            <label className="filter-label">Brand</label>
            <select className="form-input" value={brand} onChange={e => setBrand(e.target.value)} data-testid="brand-filter">
              <option value="">All Brands</option>
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Price */}
          <div className="filter-group">
            <label className="filter-label">
              Max Price: <strong>£{maxPrice === 2000 ? 'Any' : maxPrice}</strong>
            </label>
            <input
              type="range" min="50" max="2000" step="50" value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="price-range" data-testid="price-filter"
            />
            <div className="price-range-labels">
              <span>£50</span>
              <span>£2000</span>
            </div>
          </div>

          {/* Rating */}
          <div className="filter-group">
            <label className="filter-label">Minimum Rating</label>
            <div className="filter-options">
              <label className="filter-option">
                <input type="radio" name="rating" checked={minRating === 0} onChange={() => setMinRating(0)} />
                <span>Any Rating</span>
              </label>
              {RATING_OPTIONS.map(r => (
                <label key={r} className="filter-option">
                  <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)} data-testid={`rating-${r}`} />
                  <span className="rating-filter-stars">{'★'.repeat(r)}{'☆'.repeat(5 - r)} & up</span>
                </label>
              ))}
            </div>
          </div>

          {/* In Stock */}
          <div className="filter-group">
            <label className="filter-option">
              <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} data-testid="stock-filter" />
              <span>In Stock Only</span>
            </label>
          </div>
        </aside>

        {/* Main */}
        <div className="products-main">
          <div className="products-toolbar">
            <p className="products-count" data-testid="products-count">
              {loading ? '...' : `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`}
            </p>
            <select className="form-input sort-select" value={sort} onChange={e => setSort(e.target.value)} data-testid="sort-select">
              <option value="newest">Newest First</option>
              <option value="bestRated">Best Rated</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
          </div>

          {loading ? (
            <div className="product-grid">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="skeleton product-card-skeleton" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state" data-testid="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
              <button className="btn btn-primary" onClick={() => { setSearch(''); setCategory(''); setBrand(''); setMaxPrice(2000); setInStockOnly(false); setSort('newest') }}>Clear Filters</button>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
