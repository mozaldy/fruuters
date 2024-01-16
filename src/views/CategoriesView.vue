<template>
  <div>
    <Hero text1="Categories" />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 mt-3" v-for="category in categories" :key="category.id">
          <router-link
            :to="{ name: 'products', query: { category: category.id } }"
            class="display-5 py-3 rounded-4 card text-center fw-medium text-white text-decoration-none"
          >
            {{ category.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.ts'

export default {
  components: {
    Hero
  },
  data() {
    return {
      categories: []
    }
  },
  async created() {
    await this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      const categoriesCollection = collection(db, 'product_categories')
      const categoriesSnapshot = await getDocs(categoriesCollection)

      this.categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        img_url: doc.data().img_url
      }))
    }
  }
}
</script>

<style scoped>
.card {
  background: tomato;
  transition: 0.5s;
}
.card:hover {
  background-color: white !important;
  color: tomato !important;
}
</style>
