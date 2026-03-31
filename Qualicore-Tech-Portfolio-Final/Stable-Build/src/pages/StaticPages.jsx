import React from 'react'
import { Link } from 'react-router-dom'
import './StaticPages.css'

export function AboutPage() {
  return (
    <div className="static-page">
      <div className="page-header">
        <div className="container">
          <h1>About QualiCore Tech</h1>
          <p>Your trusted source for premium computing hardware — built for realistic QA practice.</p>
        </div>
      </div>
      <div className="container static-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>QualiCore Tech is a demo e-commerce platform created for Manual QA training, portfolio development, and real-world testing practice.</p>
            <p>The application simulates a realistic online tech retail experience with:</p>
            <ul className="about-list">
              <li>✓ A full product catalog</li>
              <li>✓ Product detail pages</li>
              <li>✓ Search and filtering</li>
              <li>✓ Cart and wishlist flows</li>
              <li>✓ Checkout validation</li>
              <li>✓ Responsive storefront behavior</li>
            </ul>
            <h2>Built for QA Practice</h2>
            <p>This project intentionally includes reproducible defects across multiple functional areas, making it an ideal environment for:</p>
            <ul className="about-list">
              <li>✓ Exploratory testing</li>
              <li>✓ Regression testing</li>
              <li>✓ Functional verification</li>
              <li>✓ Bug reporting</li>
              <li>✓ Test case design</li>
            </ul>
            <h2>Our Mission</h2>
            <p>Our mission is to provide QA learners and junior testers with a realistic, testable web application they can use to strengthen their practical testing skills and build portfolio-ready QA documentation.</p>
          </div>
          <div className="about-stats-col">
            {[
              { val: '50+', label: 'Products in Catalog' },
              { val: '6', label: 'Product Categories' },
              { val: '28+', label: 'Testable Defects' },
              { val: '4.8★', label: 'Average Rating' },
            ].map(s => (
              <div key={s.val} className="about-stat-card">
                <span className="about-stat-val">{s.val}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-cta">
          <h3>Ready to explore our range?</h3>
          <Link to="/products" className="btn btn-primary btn-lg">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="static-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help — get in touch</p>
        </div>
      </div>
      <div className="container static-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
              Have a question about a product, your order, or anything else? Our team is available Monday–Friday, 9am–5pm GMT.
            </p>
            {[
              { icon: '📧', label: 'Email', value: 'support@qualicoretech.com' },
              { icon: '📞', label: 'Phone', value: '0800 123 4567 (Free)' },
              { icon: '📍', label: 'Address', value: '1 Tech House, London, EC1A 1BB' },
              { icon: '⏰', label: 'Hours', value: 'Mon–Fri: 9am – 5pm GMT' },
            ].map(c => (
              <div key={c.label} className="contact-item">
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <p className="contact-item-label">{c.label}</p>
                  <p className="contact-item-val">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-wrap">
            <h2>Send a Message</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20 }}>
              This is a demo application. This form does not send real messages.
            </p>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Jane Smith" />
            </div>
            <div className="form-group" style={{ marginTop: 16 }}>
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="you@example.com" />
            </div>
            <div className="form-group" style={{ marginTop: 16 }}>
              <label className="form-label">Message</label>
              <textarea className="form-input" rows={5} placeholder="How can we help?" style={{ resize: 'vertical' }} />
            </div>
            <button className="btn btn-primary btn-lg" style={{ marginTop: 20, width: '100%' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TermsPage() {
  return (
    <div className="static-page">
      <div className="page-header">
        <div className="container">
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>
      <div className="container static-content">
        <div className="terms-content">
          {[
            { title: '1. Introduction', body: 'Welcome to QualiCore Tech. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, you accept these terms in full. This is a demonstration application intended for educational and QA training purposes only.' },
            { title: '2. Use of the Site', body: 'You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of spyware, computer virus, or any other malicious computer software.' },
            { title: '3. Orders & Payment', body: 'All orders placed through this demo application are simulated only. No real payments are processed, no real products are shipped, and no real financial transactions occur. All prices shown are in GBP and are for demonstration purposes only.' },
            { title: '4. Returns Policy', body: 'As this is a demo application, no real returns policy applies. In a real store, items may be returned within 14 days of receipt in original, unused condition. Proof of purchase would be required. Refunds would be processed within 5-10 working days.' },
            { title: '5. Privacy', body: 'This demo application may store data locally in your browser via localStorage. No personal data is transmitted to any server. Any information you enter is for simulation purposes only and should not be real personal or payment data.' },
            { title: '6. Disclaimer', body: 'This application is provided for educational and Manual QA training purposes. All products, prices, and data shown are fictional demonstrations. QualiCore Tech is not a real business and does not sell real products.' },
          ].map(s => (
            <div key={s.title} className="terms-section">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 80, marginBottom: 16, opacity: 0.3 }}>404</div>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">Go Home</Link>
        <Link to="/products" className="btn btn-ghost">Browse Products</Link>
      </div>
    </div>
  )
}
