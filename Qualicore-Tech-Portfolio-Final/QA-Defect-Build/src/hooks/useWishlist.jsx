import React, { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('qualicore_wishlist')
      const items = saved ? JSON.parse(saved) : []
      return items.slice(0, 8)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('qualicore_wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product) => {
    console.log('[Wishlist] Adding to wishlist:', product.name)
    setWishlist(prev => [...prev, product])
  }

  const removeFromWishlist = (productId) => {
    console.log('[Wishlist] Removing from wishlist, id:', productId)
    setWishlist(prev => prev.filter(item => item.id !== productId))
  }

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId)
  }

  const getWishlistCount = () => wishlist.length

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getWishlistCount,
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
