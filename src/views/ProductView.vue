<template>
  <div>
    <Hero
      v-if="product"
      :text1="getText1(product.title)"
      :text2="getText2(product.title)"
      :img_url="product.img_url"
    />
    <main class="container mt-5">
      <ListItem v-if="product" :index="0" :productData="product" :detail="true" />
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
      product: productDocument.data,
      id: productId
    }
  },
  methods: {
    getText1(title) {
      return title.split('(')[0].trim()
    },
    getText2(title) {
      const insideParentheses = title.split('(')[1]
      return insideParentheses ? insideParentheses.slice(0, -1).trim() : ''
    }
  }
}
</script>
