<template>
  <div :class="{ 'd-flex': true, 'mb-5': true, 'flex-row-reverse': index % 2 !== 0 }">
    <div class="left col-4">
      <img :src="img_url" alt="" class="w-100 rounded rounded-5" />
    </div>
    <div class="right col-6 mx-4 d-flex flex-column justify-content-evenly">
      <h1 class="text-uppercase display-5 fw-bold fst-italic" v-if="limited">
        today's limited offer
      </h1>
      <h3>{{ title }}</h3>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
        cupidatat.
      </p>
      <h1>$ 2.00/kg</h1>
      <div class="d-flex col-6 justify-content-between">
        <button type="button" class="btn-fruuters rounded-pill p-3 border-0">
          <h5 class="mb-0 text-white">Add to cart</h5>
        </button>
        <button
          v-if="buy_now"
          type="button"
          class="btn-fruuters-2 rounded-pill rounded-5 p-3 border-0"
        >
          <h5 class="mb-0 text-white">
            <RouterLink to="/product" class="text-white text-decoration-none">Buy Now</RouterLink>
          </h5>
        </button>
        <button v-else type="button" class="btn-fruuters rounded-pill rounded-5 p-3 border-0">
          <h5 class="mb-0 text-white">
            <RouterLink to="/product" class="text-white text-decoration-none"
              >Learn more</RouterLink
            >
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img_url: String,
    limited: Boolean,
    index: Number,
    buy_now: Boolean
  }
}
</script>
