<template>
  <div class="container mt-3">
    <div class="lead mb-3">Admin Navigation:</div>
    <RouterLink class="btn btn-primary me-2" :to="{ name: 'admin_product' }">Product</RouterLink>
    <RouterLink class="ms-3 btn btn-primary me-2" :to="{ name: 'admin_producer' }"
      >Producer</RouterLink
    >
    <hr />
  </div>
</template>
