<template>
  <div>
    <Hero
      :text1="getText1(product.title)"
      :text2="getText2(product.title)"
      :price="product.price"
      :img_url="product.img_url"
    />
    <main class="container mt-5">
      <ListItem
        :key="product.id"
        :product_id="product.id"
        :title="product.title"
        :img_url="product.img_url"
        :index="0"
        :price="product.price"
        :description="product.description"
        :discount="product.discount"
        buy_now="true"
        :produced_in="product.produced_in"
        :product_stock="product.product_stock"
        :production_capacity="product.production_capacity"
      />
      <div class="text-center">
        <RouterLink to="/" class="btn btn-nav">Go Back</RouterLink>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ListItem from '../components/ListItem.vue'
import { useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useRoute } from 'vue-router'

export default {
  components: {
    ListItem,
    Hero
  },
  setup() {
    const route = useRoute()
    const productId = route.params.productId
    // Use the useDocument function to bind a single document
    const productDocument = useDocument(doc(db, 'products', productId))

    return {
      product: productDocument.data
    }
  },
  methods: {
    getText1(title) {
      // Split the title by "(" and get the text before it
      return title.split('(')[0].trim()
    },
    getText2(title) {
      // Split the title by "(" and get the text inside parentheses
      const insideParentheses = title.split('(')[1]
      // If there is text inside parentheses, return it; otherwise, return an empty string
      return insideParentheses ? insideParentheses.slice(0, -1).trim() : ''
    }
  }
}
</script>
