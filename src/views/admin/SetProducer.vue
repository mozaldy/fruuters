<template>
  <div>
    <Hero :text1="editMode ? 'Edit Producer' : 'Add Producer'" />
    <form class="container" @submit.prevent="addProducer">
      <!-- Add necessary form fields based on your producer data structure -->
      <div class="form-group mt-3">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" class="form-control" v-model="name" />
      </div>

      <div class="form-group mt-3">
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" class="form-control" v-model="location" />
      </div>

      <div class="alert alert-success" v-if="success">Successfully added {{ name }}</div>
      <button type="submit" class="mt-5 btn btn-primary">
        {{ editMode ? 'Update Producer' : 'Add Producer' }}
      </button>
    </form>
  </div>
</template>

<script>
import { doc, setDoc, collection, getDocs, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.ts'
import Hero from '../../components/Hero.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Hero
  },
  data() {
    return {
      name: '',
      location: '',
      success: false,
      editMode: false,
      producerId: null
    }
  },
  async created() {
    const route = useRoute()
    if (route.params.producerId) {
      this.editMode = true
      this.producerId = route.params.producerId
      await this.fetchProducerData()
    }
  },
  methods: {
    async fetchProducerData() {
      try {
        const producerDoc = await getDoc(doc(db, 'producers', this.producerId))
        const producerData = producerDoc.data()
        this.name = producerData.name
        this.location = producerData.location
      } catch (error) {
        console.error('Error fetching producer data:', error)
      }
    },
    async addProducer() {
      await setDoc(doc(db, 'producers', this.name), {
        name: this.name,
        location: this.location
      })
      this.success = true
    }
  }
}
</script>
