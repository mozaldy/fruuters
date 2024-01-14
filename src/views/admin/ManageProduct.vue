<template>
  <div>
    <Hero text1="All Products" />
    <main class="container mt-5">
      <RouterLink to="addproduct" class="h5 text-primary mb-5"> Add Product </RouterLink>
      <ul class="mt-5 list-group rounded-5">
        <li
          v-for="product in products"
          :key="product.id"
          class="list-group-item justify-content-evenly py-0 d-flex flex-wrap align-items-center"
        >
          <img :src="product.img_url" class="my-2 rounded-5 col-2" alt="" />
          <span class="h5 fw-bold col-4">{{ product.title }}</span>
          <div class="h5 col-1">${{ product.price }}</div>
          <div class="col-md-2 d-flex">
            <!-- Use RouterLink to navigate to the edit page with the product ID -->
            <RouterLink :to="{ name: 'editproduct', params: { productId: product.id } }">
              <button class="btn btn-primary me-2">Edit</button>
            </RouterLink>
            <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Hero from '../../components/Hero.vue'
import { useCollection } from 'vuefire'
import { deleteDoc, doc } from 'firebase/firestore'
import { productRef } from '../../firebase'
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
    Hero
  },
  data() {
    return {
      products: useCollection(productRef)
    }
  },
  methods: {
    async deleteProduct(productId) {
      if (confirm('Are you sure you want to delete this product?')) {
        try {
          await deleteDoc(doc(productRef, productId))
          console.log('Product deleted successfully.')
        } catch (error) {
          console.error('Error deleting product:', error)
        }
      }
    }
  }
}
</script>

<style scoped>
.list-group-item {
  transition: ease 0.5s;
}
.list-group-item:hover {
  color: white;
  background: rgba(255, 53, 49, 0.8) !important;
}
</style>
