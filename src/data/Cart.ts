import { reactive } from 'vue'

interface Product {
  id: number
  title: string
  price: number
}

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

export const cartState: CartState = reactive({
  cartItems: []
})

export const addToCartState = (product: Product, quantity: number): void => {
  const item: CartItem = {
    id: product.id,
    name: product.title,
    price: product.price,
    quantity
  }
  cartState.cartItems.push(item)
}

export const removeFromCart = (itemId: number): void => {
  const index = cartState.cartItems.findIndex((item) => item.id === itemId)
  if (index !== -1) {
    cartState.cartItems.splice(index, 1)
  }
}
