import { createContext, useReducer } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { isCartOpen, cartItems, cartCount, cartTotal } = state

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)

    const newCartTotal = newCartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price
    }, 0)

    dispatch({
      type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    })
  }

  // Actions or Cart Actions
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch({
      type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN,
      payload: bool,
    })
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemToCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
