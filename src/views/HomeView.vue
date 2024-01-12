<template>
  <div>
    <Hero
      text1="get your own"
      text2="fruits more easier!"
      img_url="https://th.bing.com/th/id/OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN?rs=1&pid=ImgDetMain"
    />
    <main class="container mt-5">
      <ListItem
        v-for="(product, index) in discountedProducts"
        :key="product.id"
        :product_id="product.id"
        :title="product.title"
        :img_url="product.img_url"
        :index="index"
        :price="product.price"
        :description="product.description"
        :limited="true"
        :discount="product.discount"
      />
      <h1 class="display-5 pt-5 m-5 fw-bold fst-italic">Today's pick</h1>
      <ListItem
        v-for="(product, index) in products"
        :key="product.id"
        :product_id="product.id"
        :title="product.title"
        :img_url="product.img_url"
        :index="index"
        :price="product.price"
        :description="product.description"
        :discount="product.discount"
      />
      <div class="w-100 text-center">
        <button class="btn-more rounded-pill text-white">
          <RouterLink to="/" class="text-decoration-none text-white">See More</RouterLink>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ListItem from '../components/ListItem.vue'
import { useCollection } from 'vuefire'
import { collection, query, where } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  components: {
    ListItem,
    Hero
  },
  data() {
    return {
      products: useCollection(collection(db, 'products'))
    }
  },
  computed: {
    discountedProducts() {
      return this.products.filter((product) => product.discount !== 0)
    }
  }
}
</script>
