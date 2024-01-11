<template>
  <div>
    <Hero
      text1="get your own"
      text2="fruits more easier!"
      img_url="https://th.bing.com/th/id/OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN?rs=1&pid=ImgDetMain"
    />
    <main class="container mt-5">
      <ListItem
        title="Buah Naga (Dragon Fruit)"
        :limited="true"
        img_url="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/7/4/c886351f-79e4-4e51-aee9-9016ffa30c18.jpg"
        :index="0"
      />
      <h1 class="display-5 pt-5 m-5 fw-bold fst-italic">Today's pick</h1>
      <ListItem
        title="Mangga Arumanis (Arumanis Mangoes)"
        img_url="https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg"
        :index="0"
      />
      <ListItem
        title="Durian Montong"
        img_url="https://www.gooddurian.id/images/product/20221012_101644_phpn4y6mv_resized.jpg"
        :index="1"
      />
      <ListItem
        title="Mangga Arumanis (Arumanis Mangoes)"
        img_url="https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg"
        :index="2"
      />
      <ListItem
        title="Durian Montong"
        img_url="https://www.gooddurian.id/images/product/20221012_101644_phpn4y6mv_resized.jpg"
        :index="3"
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
import TheWelcome from '../components/TheWelcome.vue'
import ListItem from '../components/ListItem.vue'
import Hero from '../components/Hero.vue'

export default {
  components: {
    ListItem,
    Hero
  }
}
</script>
