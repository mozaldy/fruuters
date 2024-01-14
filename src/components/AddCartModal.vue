<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div class="form-group">
        <label for="quantity">Kuantitas:</label>
        <input v-model="quantity" class="form-control" type="number" id="quantity" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Pilih petani dan harga:</label>
        <select class="form-control" id="producer">
          <option v-for="producer in productData.producers">
            {{ producer.id }} - ${{ productData.price }}/kg
          </option>
        </select>
      </div>
      <p class="h5 mt-1">Total: ${{ productData.price * quantity }}</p>
      <button @click="addToCart" type="submit" class="btn mt-2 btn-primary">Add to cart</button>
      <p v-if="success">{{ productData.title }} added to cart!</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 1,
      success: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    addToCart() {
      this.success = true
    }
  }
}
</script>

<style scoped>
/* Style your modal here */
.modal {
  display: block;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
