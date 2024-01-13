<template>
  <div>
    <Hero text1="All Products" />
    <main class="container mt-5">
      <ul class="list-group rounded-5">
        <li
          v-for="product in products"
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
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import { useCollection } from 'vuefire'
import { productRef } from '../firebase'
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
