<template>
  <div>
    <Hero :text1="editMode ? 'Edit Product' : 'Add Product'" />
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
          <option v-for="producer in producers" :key="producer.id" :value="producer">
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
    const route = useRoute()
    if (route.params.productId) {
      this.editMode = true
      this.productId = route.params.productId
      await this.fetchProductData()
    }
    await this.fetchProducers()
  },
  methods: {
    async fetchProductData() {
      try {
        const productDoc = await getDoc(doc(db, 'products', this.productId))
        const productData = productDoc.data()
        this.title = productData.title
        this.description = productData.description
        this.discount = productData.discount
        this.price = productData.price
        this.img_url = productData.img_url
        this.produced_in = productData.produced_in
        this.product_stock = productData.product_stock
        this.production_capacity = productData.production_capacity
        this.selectedProducers = productData.producers.map((producer) => producer)
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    },
    async addProduct() {
      const producersArray = this.selectedProducers

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
    } // ... rest of your methods
  }
}
</script>
