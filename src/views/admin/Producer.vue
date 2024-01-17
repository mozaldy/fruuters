<template>
  <div>
    <Hero text1="All Producers" />
    <AdminNav />
    <main class="container mt-5">
      <RouterLink to="addproducer" class="h5 text-primary mb-5"> Add Producer </RouterLink>
      <ul class="mt-5 list-group rounded-5">
        <li
          v-for="producer in producers"
          :key="producer.id"
          class="list-group-item justify-content-evenly py-0 d-flex flex-wrap align-items-center"
        >
          <!-- Add necessary fields based on your producer data structure -->
          <span class="h5 fw-bold col-4">{{ producer.name }}</span>
          <span class="col-4">{{ producer.location }}</span>
          <div class="col-md-2 d-flex">
            <RouterLink :to="{ name: 'editproducer', params: { producerId: producer.id } }">
              <button class="btn btn-primary me-2">Edit</button>
            </RouterLink>
            <button class="btn btn-danger" @click="deleteProducer(producer.id)">Delete</button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Hero from '../../components/Hero.vue'
import { useCollection } from 'vuefire'
import { deleteDoc, doc } from 'firebase/firestore'
import { producerRef } from '../../firebase'
import { RouterLink } from 'vue-router'
import AdminNav from './AdminNav.vue'

export default {
  components: {
    RouterLink,
    Hero,
    AdminNav
  },
  data() {
    return {
      producers: useCollection(producerRef)
    }
  },
  methods: {
    async deleteProducer(producerId) {
      if (confirm('Are you sure you want to delete this producer?')) {
        try {
          await deleteDoc(doc(producerRef, producerId))
          console.log('Producer deleted successfully.')
        } catch (error) {
          console.error('Error deleting producer:', error)
        }
      }
    }
  }
}
</script>

<style scoped>
.list-group-item {
  transition: ease 0.5s;
}
.list-group-item:hover {
  color: white;
  background: rgba(255, 53, 49, 0.8) !important;
}
</style>
