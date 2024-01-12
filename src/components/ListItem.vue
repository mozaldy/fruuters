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
      <img :src="img_url" alt="" class="w-100 rounded rounded-5" />
    </div>
    <div class="right col-sm-6 d-flex flex-column justify-content-evenly">
      <h1 class="text-uppercase display-5 fw-bold fst-italic" v-if="limited">
        today's limited offer
      </h1>
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <ul>
        <li>
          Produced in: <span class="fw-bold">{{ produced_in }}</span>
        </li>
        <li>
          Production capacity: <span class="fw-bold">{{ production_capacity }}</span> tons/month
        </li>
        <li>
          Stock: <span class="fw-bold">{{ product_stock }}</span> tons
        </li>
      </ul>
      <h1 v-if="discount != 1">$ {{ (price - price * (discount / 100)).toFixed(2) }}/kg</h1>

      <div class="d-flex btn-container">
        <RouterLink to="/checkout" class="btn btn-primary me-3"> Add to Cart </RouterLink>

        <RouterLink v-if="buy_now" to="/checkout" class="btn btn-secondary"> Buy Now </RouterLink>
        <RouterLink
          v-else
          :to="{ name: 'product', params: { productId: product_id } }"
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
export default {
  components: {
    RouterLink
  },
  props: {
    title: String,
    img_url: String,
    description: String,
    discount: {
      type: Number,
      default: 1
    },
    price: Number,
    limited: {
      type: Boolean,
      default: false
    },
    index: Number,
    buy_now: Boolean,
    product_id: String,
    produced_in: {
      type: String,
      default: 'Indonesia'
    },
    production_capacity: {
      type: Number,
      default: 0
    },
    product_stock: {
      type: Number,
      default: 0
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
