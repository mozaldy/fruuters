<template>
  <nav class="navbar z-100 navbar-expand-lg w-100 bg-fruuters">
    <div class="container align-items-end d-flex">
      <RouterLink to="/" class="text-white mb-1 h2 text-decoration-none letter nav-title">
        <img src="/logo.png" height="55px" class="rounded-pill" alt="" />
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
            <RouterLink to="/" active-class="fw-bold" class="nav-link text-white">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/categories" active-class="fw-bold" class="nav-link text-white"
              >Categories</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/account" active-class="fw-bold" class="nav-link text-white"
              >Account</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" active-class="fw-bold" class="nav-link text-white"
              >About</RouterLink
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
img {
  border: 1px solid transparent !important;
}
img:hover {
  border: 1px solid transparent !important;
}
</style>
