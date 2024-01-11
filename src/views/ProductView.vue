<template>
  <div>
    <Hero
      text1="Buah Naga"
      text2="(Dragon Fruit)"
      img_url="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/7/4/c886351f-79e4-4e51-aee9-9016ffa30c18.jpg"
      price="$ 2000/kg"
    />
    <div class="container mt-5">
      <ListItem
        title="Buah Naga (Dragon Fruit)"
        buy_now="true"
        img_url="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/7/4/c886351f-79e4-4e51-aee9-9016ffa30c18.jpg"
        index="0"
      />
    </div>
    <div class="w-75 m-auto text-center">
      <RouterLink to="/" class="text-decoration-none text-white"
        ><button class="btn-more rounded-pill text-white">Go Back</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    Hero,
    ListItem
  }
}
</script>
<style></style>
