import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import './CheckoutPage.css'

const SHIPPING = 5.99
const FREE_THRESHOLD = 50

function genOrderNum() {
  return 'QC-' + Math.random().toString(36).substring(2, 8).toUpperCase()
}

export default function CheckoutPage() {
  const { cart, getSubtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', address: '',
    city: '', postcode: '', phone: '',
    cardHolder: '', cardNumber: '', expiry: '', cvv: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const subtotal = getSubtotal()
  const shipping = subtotal >= FREE_THRESHOLD ? 0 : SHIPPING
  const total = subtotal + shipping

  const set = (key) => (e) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'Required'
    if (!form.lastName.trim()) errs.lastName = 'Required'
    if (!form.email.trim()) errs.email = 'Required'
    if (!form.address.trim()) errs.address = 'Required'
    if (!form.city.trim()) errs.city = 'Required'
    if (!form.postcode.trim()) errs.postcode = 'Required'
    if (!form.cardHolder.trim()) errs.cardHolder = 'Required'
    if (!form.cardNumber.trim()) errs.cardNumber = 'Required'
    else if (form.cardNumber.replace(/\s/g, '').length < 16) {
      errs.cardNumber = 'Card number must be 16 digits'
    }

    if (!form.expiry.trim()) errs.expiry = 'Required'
    if (!form.cvv.trim()) errs.cvv = 'Required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      console.log('[Checkout] Validation failed:', errs)
      return
    }

    console.log('[Checkout] Submitting order:', { form, cart, total })
    setLoading(true)

    setTimeout(() => {
      const order = {
        orderNumber: genOrderNum(),
        date: new Date().toISOString(),
        items: cart,
        subtotal,
        shipping,
        total,
        customer: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          address: `${form.address}, ${form.city}, ${form.postcode}`,
        }
      }
      localStorage.setItem('qualicore_order', JSON.stringify(order))
      clearCart()
      setLoading(false)
      navigate('/order-success')
    }, 1000)
  }

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add products to your cart before checking out.</p>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="page-header">
        <div className="container">
          <h1>Checkout</h1>
          <p>Complete your order</p>
        </div>
      </div>

      <div className="container checkout-layout">
        <form onSubmit={handleSubmit} noValidate data-testid="checkout-form">
          <div className="checkout-section">
            <h3 className="checkout-section-title">
              <span className="checkout-step">1</span> Customer Details
            </h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className={`form-input ${errors.firstName ? 'input-error' : ''}`}
                  value={form.firstName}
                  onChange={set('firstName')}
                  data-testid="checkout-firstname"
                />
                {errors.firstName && <span className="form-error">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className={`form-input ${errors.lastName ? 'input-error' : ''}`}
                  value={form.lastName}
                  onChange={set('lastName')}
                  data-testid="checkout-lastname"
                />
                {errors.lastName && <span className="form-error">{errors.lastName}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  value={form.email}
                  onChange={set('email')}
                  data-testid="checkout-email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="07700 000000"
                  data-testid="checkout-phone"
                />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h3 className="checkout-section-title">
              <span className="checkout-step">2</span> Delivery Address
            </h3>
            <div className="form-group">
              <label className="form-label">Street Address *</label>
              <input
                type="text"
                className={`form-input ${errors.address ? 'input-error' : ''}`}
                value={form.address}
                onChange={set('address')}
                placeholder="123 High Street"
                data-testid="checkout-address"
              />
              {errors.address && <span className="form-error">{errors.address}</span>}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  className={`form-input ${errors.city ? 'input-error' : ''}`}
                  value={form.city}
                  onChange={set('city')}
                  placeholder="London"
                  data-testid="checkout-city"
                />
                {errors.city && <span className="form-error">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Postcode *</label>
                <input
                  type="text"
                  className={`form-input ${errors.postcode ? 'input-error' : ''}`}
                  value={form.postcode}
                  onChange={set('postcode')}
                  placeholder="SW1A 1AA"
                  data-testid="checkout-postcode"
                />
                {errors.postcode && <span className="form-error">{errors.postcode}</span>}
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h3 className="checkout-section-title">
              <span className="checkout-step">3</span> Payment Details
            </h3>
            <div className="payment-notice">
              🔒 This is a demo application. No real payment is processed.
            </div>
            <div className="form-group">
              <label className="form-label">Cardholder Name *</label>
              <input
                type="text"
                className={`form-input ${errors.cardHolder ? 'input-error' : ''}`}
                value={form.cardHolder}
                onChange={set('cardHolder')}
                placeholder="John Smith"
                data-testid="checkout-cardholder"
              />
              {errors.cardHolder && <span className="form-error">{errors.cardHolder}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Card Number *</label>
              <input
                type="text"
                className={`form-input ${errors.cardNumber ? 'input-error' : ''}`}
                value={form.cardNumber}
                onChange={set('cardNumber')}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                data-testid="checkout-card-number"
              />
              {errors.cardNumber && <span className="form-error">{errors.cardNumber}</span>}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Expiry Date *</label>
                <input
                  type="text"
                  className={`form-input ${errors.expiry ? 'input-error' : ''}`}
                  value={form.expiry}
                  onChange={set('expiry')}
                  placeholder="MM/YY"
                  maxLength={5}
                  data-testid="checkout-expiry"
                />
                {errors.expiry && <span className="form-error">{errors.expiry}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">CVV *</label>
                <input
                  type="text"
                  className={`form-input ${errors.cvv ? 'input-error' : ''}`}
                  value={form.cvv}
                  onChange={set('cvv')}
                  placeholder="123"
                  maxLength={4}
                  data-testid="checkout-cvv"
                />
                {errors.cvv && <span className="form-error">{errors.cvv}</span>}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg checkout-submit-btn"
            disabled={loading}
            data-testid="place-order-btn"
          >
            {loading ? 'Processing...' : `Place Order — £${total.toFixed(2)}`}
          </button>
        </form>

        <div className="checkout-summary" data-testid="checkout-summary">
          <h3 className="checkout-summary-title">Order Summary</h3>
          <div className="checkout-items-list">
            {cart.map((item, i) => (
              <div key={i} className="checkout-summary-item">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={e => { e.target.src = 'https://placehold.co/48x36/0f1629/4a5a70?text=?' }}
                />
                <div className="checkout-summary-item-info">
                  <span className="checkout-summary-item-name">{item.name}</span>
                  <span className="checkout-summary-item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="checkout-summary-item-price">
                  £{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <div className="checkout-summary-totals">
            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}</span>
            </div>
          </div>
          <hr className="divider" />
          <div className="checkout-summary-total">
            <span>Total</span>
            <span>£{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
