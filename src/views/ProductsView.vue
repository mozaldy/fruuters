<template>
  <div>
    <Hero text1="All Products" />
    <div class="container mt-5">
      <div class="mb-3">
        <label for="categorySelect">Filter by Category:</label>
        <select v-model="selectedCategory" @change="filterProducts" id="categorySelect">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <ul class="list-group rounded-5">
        <li
          v-for="product in filteredProducts"
          :key="product.id"
          class="list-group-item justify-content-evenly py-0 d-flex flex-wrap align-items-center"
        >
          <img :src="product.img_url" class="my-2 rounded-5 col-2" alt="" />
          <span class="h5 fw-bold col-4">{{ product.title }}</span>
          <div class="h5 col-1">${{ product.price }}</div>
          <RouterLink
            :to="{ name: 'product', params: { productId: product.id } }"
            class="col-md-2 btn btn-primary"
          >
            Learn More
          </RouterLink>
          <!-- ... your existing product HTML -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import { useCollection } from 'vuefire'
import { productRef } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.ts'
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
    Hero
  },
  data() {
    return {
      products: useCollection(productRef),
      categories: [], // Add this property to store categories
      selectedCategory: '' // Add this property to store the selected category filter
    }
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products
      } else {
        return this.products.filter(
          (product) =>
            product.categories &&
            product.categories.some((category) => category.name === this.selectedCategory)
        )
      }
    }
  },
  async created() {
    const queryCategory = this.$route.query.category
    if (queryCategory) {
      // Set the selected category if it exists in the query parameters
      this.selectedCategory = queryCategory
    }
    await this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      const categoriesCollection = collection(db, 'product_categories')
      const categoriesSnapshot = await getDocs(categoriesCollection)
      this.categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name
      }))
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
