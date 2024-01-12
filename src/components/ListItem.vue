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
      <h1 v-if="discount != 1">$ {{ (price - price * (discount / 100)).toFixed(2) }}/kg</h1>

      <div class="d-flex btn-container">
        <RouterLink to="/product" class="me-3 text-white text-decoration-none">
          <button type="button" class="btn btn-primary rounded-pill rounded-5 px-3 border-0">
            Add to Cart
          </button>
        </RouterLink>

        <RouterLink v-if="buy_now" to="/product" class="text-white text-decoration-none">
          <button
            v-if="buy_now"
            type="button"
            class="btn btn-secondary rounded-pill rounded-5 px-3 border-0"
          >
            Buy Now
          </button></RouterLink
        >
        <RouterLink
          v-else
          :to="{ name: 'product', params: { productId: product_id } }"
          class="text-white text-decoration-none"
        >
          <button type="button" class="btn btn-primary rounded-pill rounded-5 px-3 border-0">
            Learn more
          </button>
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
    product_id: String
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
