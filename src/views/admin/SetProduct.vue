<template>
  <div>
    <Hero :text1="editMode ? 'Edit Product' : 'Add Product'" />
    {{ productId }}
    <form class="container" @submit.prevent="addProduct">
      <div class="form-group mt-3">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" class="form-control" v-model="title" />
      </div>

      <div class="form-group mt-3">
        <label for="description">Description:</label>
        <textarea
          id="description"
          name="description"
          class="form-control"
          v-model="description"
        ></textarea>
      </div>

      <div class="form-group mt-3">
        <label for="discount">Discount:</label>
        <input
          type="number"
          id="discount"
          name="discount"
          class="form-control"
          v-model="discount"
        />
      </div>

      <div class="form-group mt-3">
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" class="form-control" v-model="price" />
      </div>

      <div class="form-group mt-3">
        <label for="img_url">Image URL:</label>
        <input type="text" id="img_url" name="img_url" class="form-control" v-model="img_url" />
      </div>

      <div class="form-group mt-3">
        <label for="produced_in">Produced In:</label>
        <input
          type="text"
          id="produced_in"
          name="produced_in"
          class="form-control"
          v-model="produced_in"
        />
      </div>

      <div class="form-group mt-3">
        <label for="production_capacity">Production Capacity:</label>
        <input
          type="number"
          id="production_capacity"
          name="production_capacity"
          class="form-control"
          v-model="production_capacity"
        />
      </div>
      <div class="form-group mt-3">
        <label for="production_capacity">Stock:</label>
        <input
          type="number"
          id="product_stock"
          name="product_stock"
          class="form-control"
          v-model="product_stock"
        />
      </div>

      <div class="form-group mt-3">
        <label for="producers">Producers:</label>
        <select
          id="producers"
          name="producers"
          class="form-control"
          v-model="selectedProducers"
          multiple
        >
          <option v-for="producer in producers" :key="producer.id" :value="producer.id">
            {{ producer.name }} - {{ producer.location }}
          </option>
        </select>
      </div>

      <div class="alert alert-success" v-if="success">Successfully added {{ title }}</div>
      <button type="submit" class="mt-5 btn btn-primary">
        {{ editMode ? 'Update Product' : 'Add Product' }}
      </button>
    </form>
  </div>
</template>

<script>
import { doc, setDoc, collection, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.ts'
import Hero from '../../components/Hero.vue'
import { useDocument } from 'vuefire'
import { useRoute } from 'vue-router'

export default {
  components: {
    Hero
  },
  data() {
    const route = useRoute()
    const productId = route.params.productId
    if (productId) {
      const productDocument = useDocument(doc(db, 'products', productId))
      if (productDocument) {
        return {
          title: productDocument.value.title,
          description: productDocument.value.description,
          discount: productDocument.value.discount,
          price: productDocument.value.price,
          img_url: productDocument.value.img_url,
          produced_in: productDocument.value.produced_in,
          production_capacity: productDocument.value.production_capacity,
          product_stock: productDocument.value.product_stock,
          selectedProducers: [],
          producers: [],
          success: false,
          editMode: false,
          productId: null // Add a property to store the productId for editing
        }
      }
    }
    return {
      title: '',
      description: '',
      discount: 0,
      price: 0,
      img_url: '',
      produced_in: '',
      production_capacity: 0,
      product_stock: 0,
      selectedProducers: [],
      producers: [],
      success: false,
      editMode: false,
      productId: null // Add a property to store the productId for editing
    }
  },
  async created() {
    // Check if the component is in edit mode by checking the route's params
    if (this.$route.params.productId) {
      this.editMode = true
      this.productId = this.$route.params.productId
    }
    await this.fetchProducers()
  },
  methods: {
    async addProduct() {
      const producersArray = this.selectedProducers.map((producerId) => ({ id: producerId }))

      await setDoc(doc(db, 'products', this.title), {
        title: this.title,
        description: this.description,
        discount: this.discount,
        price: this.price,
        img_url: this.img_url,
        produced_in: this.produced_in,
        product_stock: this.product_stock,
        production_capacity: this.production_capacity,
        producers: producersArray
      })

      this.success = true
    },

    async fetchProducers() {
      const producersCollection = collection(db, 'producers')
      const producersSnapshot = await getDocs(producersCollection)

      this.producers = producersSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        location: doc.data().location
      }))
    }
  }
}
</script>
