<template>
  <div>
    <Hero text1="Categories" />
    <div class="container mt-5">
      <div class="row">
        <Card
          title="Mangos"
          text="Mangos are lorem ipsum dolor"
          img_url="https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg"
          route="/"
        />
        <Card
          title="Mangos"
          text="Mangos are lorem ipsum dolor"
          img_url="https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg"
          route="/"
        />
        <Card
          title="Mangos"
          text="Mangos are lorem ipsum dolor"
          img_url="https://s2.bukalapak.com/img/2172597621/w-1000/Tanaman_Mangga_Arumanis.jpg"
          route="/"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Hero from '../components/Hero.vue'
import Card from '../components/Card.vue'
export default {
  components: {
    Hero,
    Card
  }
}
</script>
