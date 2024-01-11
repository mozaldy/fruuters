<template>
  <header class="rounded-bottom-5 bg-fruuters">
    <div class="d-flex justify-content-between pb-3 ms-10p">
      <div class="my-auto h-fit col-6 left">
        <h1 class="text-white display-5 text-uppercase fw-bold fst-italic">{{ text1 }}</h1>
        <h1 class="text-end text-white display-5 text-uppercase fw-bold fst-italic">
          {{ text2 }}
        </h1>
        <h1 class="text-white text-uppercase">{{ price }}</h1>
      </div>
      <div class="col-5 right">
        <img :src="img_url" alt="" class="w-100 rounded rounded-5" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  props: {
    text1: String,
    text2: String,
    img_url: String,
    price: String
  }
}
</script>
<style scoped>
.h-fit {
  height: fit-content;
}
.ms-10p {
  margin-left: 10%;
}
img {
  margin-top: -10%;
  margin-left: -3%;
}
img,
.right {
  z-index: 101;
}
</style>
