import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('qualicore_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [badgeCount, setBadgeCount] = useState(() => {
    try {
      const saved = localStorage.getItem('qualicore_cart')
      const items = saved ? JSON.parse(saved) : []
      return items.reduce((sum, item) => sum + item.quantity, 0)
    } catch {
      return 0
    }
  })

  useEffect(() => {
    localStorage.setItem('qualicore_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    console.log('[Cart] Adding to cart:', product.name, 'qty:', quantity)
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      let updated
      if (existing) {
        updated = prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        updated = [...prev, { ...product, quantity }]
      }
      const newCount = updated.reduce((sum, item) => sum + item.quantity, 0)
      setBadgeCount(newCount)
      return updated
    })
  }

  const removeFromCart = (productId) => {
    console.log('[Cart] Removing from cart, id:', productId)
    setCart(prev => {
      const updated = prev.filter(item => item.id !== productId)
      const newCount = updated.reduce((sum, item) => sum + item.quantity, 0)
      setBadgeCount(newCount)
      return updated
    })
  }

  const updateQuantity = (productId, quantity) => {
    console.log('[Cart] Updating quantity, id:', productId, 'qty:', quantity)
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => {
      const updated = prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
      const newCount = updated.reduce((sum, item) => sum + item.quantity, 0)
      setBadgeCount(newCount)
      return updated
    })
  }

  const clearCart = () => {
    setCart([])
    setBadgeCount(0)
  }

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getSubtotal,
      getCartCount,
      badgeCount,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
