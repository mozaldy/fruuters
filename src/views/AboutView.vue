<template>
  <div>
    <Hero text1="About" />
    <div class="container mt-5">
      <div class="language-select d-flex justify-content-end mb-5">
        <select
          id="languageSelect"
          class="form-select"
          @change="changeLocale($event.target.value)"
          style="width: 10rem"
        >
          <option value="en">English</option>
          <option value="id">Bahasa Indonesia</option>
        </select>
      </div>
      <div class="row d-flex">
        <div class="col-md-6">
          <img class="m-auto d-block w-75 rounded-5" src="/logo.jpg" alt="Früüters Logo" />
        </div>
        <div class="align-items-center d-flex col-md-6">
          <div class="container d-flex flex-column">
            <h3>{{ $t('title') }}</h3>
            <p class="lead">{{ $t('lead') }}</p>
            <p>{{ $t('paragraph1') }}</p>
            <p>{{ $t('paragraph2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  components: {
    Hero
  },
  watch: {
    currentLocale(newLocale) {
      this.$i18n.locale = newLocale
    }
  },
  created() {
    // Set initial locale
    this.$i18n.locale = this.currentLocale
  },
  beforeCreate() {
    // Update i18n instance
    this.$i18n.mergeLocaleMessage('en', {
      about: 'About',
      title: 'Früüters',
      lead: 'pioneering agricultural and horticultural business in Indonesia.',
      paragraph1:
        'Fruuters is a new startup based on a marketplace in the agriculture sector, focusing on the supply of fruits for the entire domestic and international community. Fruuters.id serves as an intermediary for farmers who have agricultural products such as fruits in Indonesia, enabling them to be utilized and exported abroad.',
      paragraph2:
        "Our company aims to advance the natural resources industry in Indonesia, providing benefits to farmers and the country. Fruuters.id serves as the company's base, intending to market agricultural products in Indonesia, particularly in the hinterlands and remote areas, thereby enhancing their well-being."
    })

    this.$i18n.mergeLocaleMessage('id', {
      about: 'Tentang',
      title: 'Früüters',
      lead: 'Pionir dalam bisnis pertanian dan kebun di Indonesia.',
      paragraph1:
        'Fruuters adalah sebuah startup baru berbasis marketplace di bidang agriculture yang fokus dalam pasokan buah bagi seluruh masyakarat dalam negeri dan mancanegara. Dimana fruuters.id akan menjadi perantara bagi para petani yang memiliki hasil bumi berupa buah-buahan di Indonesia agar dapat dimanfaatkan dan diekspor ke luar negeri.',
      paragraph2:
        'Perusahaan kami memiliki tujuan untuk memajukan industri hasil alam di Indonesia sehingga dapat memberikan keuntungan bagi para petani dan negara Indonesia. Fruuters.id disini menjadi basis perusahaan yang nantinya akan memasarkan hasil bumi di Indonesia khususnya di pedalaman dan pelosok Indonesia sehingga dapat meningkatkan kesejahteraan mereka'
    })
  },
  methods: {
    changeLocale(locale) {
      this.currentLocale = locale
    }
  },
  data() {
    return {
      currentLocale: 'en' // default language
    }
  }
}
</script>

<style>
svg {
  color: tomato;
}
</style>
