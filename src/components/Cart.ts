import { reactive } from 'vue'

export const cartState = reactive({
  cartItems: []
})

export const addToCartState = (product, quantity) => {
  const item = {
    id: product.id,
    name: product.title,
    price: product.price,
    quantity
  }
  cartState.cartItems.push(item)
}

export const removeFromCart = (itemId) => {
  const index = cartState.cartItems.findIndex((item) => item.id === itemId)
  if (index !== -1) {
    cartState.cartItems.splice(index, 1)
  }
}
