import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import './AuthPages.css'

const DEMO_EMAIL = 'demo@qualicoretech.com'
const DEMO_PASSWORD = 'Demo1234'

export default function LoginPage() {
  const { login } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.email.trim()) errs.email = 'Email is required'
    if (!form.password) errs.password = 'Password is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) return

    console.log('[Auth] Login attempt:', form.email)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (form.email === DEMO_EMAIL && form.password === DEMO_PASSWORD) {
        login({ email: form.email, firstName: 'Demo' })
        addToast('Welcome back, Demo!', 'success')
        console.log('[Auth] Login successful')
        navigate('/')
      } else {
        setErrors({ general: 'Invalid email or password. Try demo@qualicoretech.com / Demo1234' })
        console.log('[Auth] Login failed — invalid credentials')
      }
    }, 700)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span>⬡</span> Quali<span className="logo-accent">Core</span>
          </Link>
          <h1>Welcome back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <div className="auth-demo-hint">
          <strong>Demo credentials:</strong><br />
          Email: demo@qualicoretech.com &nbsp;|&nbsp; Password: Demo1234
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate data-testid="login-form">
          {errors.general && (
            <div className="auth-error-banner" data-testid="login-error">{errors.general}</div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              autoComplete="email"
              data-testid="login-email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              placeholder="Enter your password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              autoComplete="current-password"
              data-testid="login-password"
            />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg auth-submit-btn"
            disabled={loading}
            data-testid="login-submit"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  )
}
