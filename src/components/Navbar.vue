<template>
  <nav class="navbar z-100 navbar-expand-lg w-100 bg-fruuters">
    <div class="container">
      <RouterLink to="/" class="text-white h2 text-decoration-none letter nav-title">
        <img src="/logo.ico" height="90px" class="rounded-pill" alt="" />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
        <ul class="col-6 navbar-nav justify-content-evenly fw-light">
          <li class="nav-item">
            <RouterLink to="/categories" active-class="fw-bold" class="nav-link text-white"
              >Categories</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/offers" active-class="fw-bold" class="nav-link text-white"
              >Offers</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/account" active-class="fw-bold" class="nav-link text-white"
              >Account</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" active-class="fw-bold" class="nav-link text-white"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  z-index: 100;
}
</style>
