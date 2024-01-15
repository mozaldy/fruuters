<template>
  <div class="bg-fruuters footer">
    <div class="container">
      <div class="container">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          <p class="col-md-4 mb-0 text-white">© 2024 Früüters, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src="/logo.ico" class="rounded-pill" height="90px" width="90px" alt="" />
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item text-white">
              <RouterLink to="/" class="nav-link px-2 text-white">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="account" class="nav-link px-2 text-white">Account</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="products" class="nav-link px-2 text-white">All products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="about" class="nav-link px-2 text-white">About</RouterLink>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  border: none !important;
}
.footer-title {
  letter-spacing: 2px;
  transition: 0.5s;
}
.footer-title:hover {
  letter-spacing: 5px;
}
.footer {
  margin-bottom: -10%;
}
ul {
  list-style: none;
}
</style>
