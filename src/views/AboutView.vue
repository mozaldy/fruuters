<template>
  <div>
    <Hero text1="About" />
    <div class="container mt-5">
      <div class="row d-flex">
        <div class="col-md-6">
          <img class="m-auto d-block w-75 rounded-5" src="/logo.jpg" alt="Früüters Logo" />
        </div>
        <div class="align-items-center d-flex col-md-6">
          <div class="container d-flex flex-column">
            <h3>Früüters</h3>
            <p class="lead">pioneering agricultural and horticultural business in Indonesia.</p>
            <p>
              Fruuters adalah sebuah startup baru berbasis marketplace di bidang agriculture yang
              fokus dalam pasokan buah bagi seluruh masyakarat dalam negeri dan mancanegara. Dimana
              fruuters.id akan menjadi perantara bagi para petani yang memiliki hasil bumi berupa
              buah-buahan di Indonesia agar dapat dimanfaatkan dan diekspor ke luar negeri.
            </p>
            <p>
              Perusahaan kami memiliki tujuan untuk memajukan industri hasil alam di Indonesia
              sehingga dapat memberikan keuntungan bagi para petani dan negara Indonesia.
              Fruuters.id disini menjadi basis perusahaan yang nantinya akan memasarkan hasil bumi
              di Indonesia khususnya di pedalaman dan pelosok Indonesia sehingga dapat meningkatkan
              kesejahteraan mereka
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <h3>Our members:</h3>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="my-5 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60%"
                  height="60%"
                  fill="currentColor"
                  class="m-auto bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <h5 class="card-title">Muh. Dziya Ramadhani Alvaro</h5>
              <p class="card-text">Ketua</p>
              <!-- Add other details as needed -->
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="my-5 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60%"
                  height="60%"
                  fill="currentColor"
                  class="m-auto bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <h5 class="card-title">M. Defrianza Nandana</h5>
              <p class="card-text">Anggota</p>
              <!-- Add other details as needed -->
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="my-5 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60%"
                  height="60%"
                  fill="currentColor"
                  class="m-auto bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <h5 class="card-title">Hanif Farhan Abdillah</h5>
              <p class="card-text">Anggota</p>
              <!-- Add other details as needed -->
            </div>
          </div>
        </div>
        <!-- Add more member cards as needed -->
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style>
svg {
  color: tomato;
}
</style>
