<template>
  <div
    :class="{
      'd-flex': true,
      'flex-wrap': true,
      'mb-5': true,
      'justify-content-evenly': true,
      'flex-row-reverse': index % 2 !== 0
    }"
  >
    <div class="left col-sm-4">
      <img :src="productData.img_url" alt="" class="w-100 rounded rounded-5" />
    </div>
    <div class="right col-sm-6 d-flex flex-column justify-content-evenly">
      <h1 class="text-uppercase display-5 fw-bold fst-italic" v-if="productData.discount">
        today's limited offer
      </h1>
      <h3>{{ productData.title }}</h3>
      <p>
        {{ productData.description }}
      </p>
      <ul>
        <li>
          Produced in: <span class="fw-bold">{{ productData.produced_in }}</span>
        </li>
        <li>
          Production capacity:
          <span class="fw-bold">{{ productData.production_capacity }}</span> tons/month
        </li>
        <li>
          Stock: <span class="fw-bold">{{ productData.product_stock }}</span> tons
        </li>
      </ul>
      <h1>
        <del v-if="productData.discount > 0">$ {{ productData.price.toFixed(2) }}/kg</del>
        $ {{ (productData.price - productData.price * (productData.discount / 100)).toFixed(2) }}/kg
      </h1>

      <div class="d-flex btn-container">
        <button @click="showModal" class="btn btn-primary me-3">Add to Cart</button>
        <AddCartModal v-if="showModalFlag" @close="hideModal" :productData="productData" />

        <RouterLink v-if="detail" to="/checkout" class="btn btn-secondary"> Buy Now </RouterLink>
        <RouterLink
          v-else
          :to="{ name: 'product', params: { productId: productData.id } }"
          class="btn btn-primary"
        >
          Learn more
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import AddCartModal from './AddCartModal.vue'
export default {
  components: {
    RouterLink,
    AddCartModal
  },
  props: {
    productData: {
      type: Object,
      required: true
    },
    index: Number,
    detail: Boolean
  },
  data() {
    return {
      showModalFlag: false
    }
  },
  methods: {
    showModal() {
      this.showModalFlag = true
    },
    hideModal() {
      this.showModalFlag = false
    }
  }
}
</script>
<style scoped>
@media only screen and (max-width: 576px) {
  .left {
    text-align: center;
    margin-bottom: 20px;
  }
  .right {
    margin: auto;
    width: 80%;
  }
  img {
    width: 50% !important;
  }
}
</style>
