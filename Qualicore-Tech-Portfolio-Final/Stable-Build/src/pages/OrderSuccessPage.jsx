// OrderSuccessPage.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function OrderSuccessPage() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('qualicore_order')
      if (saved) setOrder(JSON.parse(saved))
    } catch {}
  }, [])

  return (
    <div className="container" style={{ padding: '80px 24px', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontSize: 72, marginBottom: 24 }}>✅</div>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Order Confirmed!</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 24, lineHeight: 1.7 }}>
        Thank you for your order. We've received your purchase and it will be dispatched within 24 hours.
      </p>

      {order && (
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', padding: 24, marginBottom: 32, textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>ORDER NUMBER</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--accent)' }}>
                {order.orderNumber}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>ORDER TOTAL</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>
                £{order.total?.toFixed(2)}
              </p>
            </div>
          </div>
          {order.customer && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                Confirmation sent to: <strong>{order.customer.email}</strong>
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>
                Delivering to: {order.customer.address}
              </p>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
        <Link to="/products" className="btn btn-ghost btn-lg">Continue Shopping</Link>
      </div>
    </div>
  )
}
