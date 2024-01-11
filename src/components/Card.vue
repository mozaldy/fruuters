<template>
  <div class="col-md-4">
    <div class="card rounded-5">
      <img :src="img_url" class="rounded-top-5" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <RouterLink :to="route" class="text-white text-decoration-none">See more</RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img_url: String,
    title: String,
    text: String,
    route: String
  }
}
</script>
