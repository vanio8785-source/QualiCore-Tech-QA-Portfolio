import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import './AuthPages.css'

export default function RegisterPage() {
  const { login } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else {
      const emailRegex = /\S+@\S+/
      if (!emailRegex.test(form.email)) {
        errs.email = 'Please enter a valid email address'
      }
    }
    if (!form.password) errs.password = 'Password is required'
    if (form.password !== form.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    console.log('[Auth] Register attempt:', form.email)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      const userData = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      }
      login(userData)
      addToast(`Welcome, ${form.firstName}! Account created.`, 'success')
      console.log('[Auth] Registration successful:', form.email)
      navigate('/')
    }, 700)
  }

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-lg">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span>⬡</span> Quali<span className="logo-accent">Core</span>
          </Link>
          <h1>Create account</h1>
          <p>Join QualiCore Tech and start shopping today</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate data-testid="register-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className={`form-input ${errors.firstName ? 'input-error' : ''}`}
                placeholder="John"
                value={form.firstName}
                onChange={set('firstName')}
                data-testid="register-firstname"
              />
              {errors.firstName && <span className="form-error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className={`form-input ${errors.lastName ? 'input-error' : ''}`}
                placeholder="Smith"
                value={form.lastName}
                onChange={set('lastName')}
                data-testid="register-lastname"
              />
              {errors.lastName && <span className="form-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="you@example.com"
              value={form.email}
              onChange={set('email')}
              data-testid="register-email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={set('password')}
              data-testid="register-password"
            />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
              placeholder="Repeat your password"
              value={form.confirmPassword}
              onChange={set('confirmPassword')}
              data-testid="register-confirm-password"
            />
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg auth-submit-btn"
            disabled={loading}
            data-testid="register-submit"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
