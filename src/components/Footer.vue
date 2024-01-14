<template>
  <div class="bg-fruuters footer">
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <a
          href="/"
          class="text-white col-sm-5 d-flex align-items-center mb-3 mb-md-0 link-dark text-decoration-none"
        >
          <img src="/logo.ico" class="rounded-pill col-3 me-5" />
          <div class="display-5 fw-bold footer-title">früüters</div>
        </a>

        <ul class="col-md-2 list-style-none mb-0 list-inline justify-content-end"></ul>
        <ul class="nav col-3 justify-content-end">
          <a href="https://github.com/mozaldy/" class="text-decoration-none">
            <p class="mb-0 text-white">Made by The 2DH Team</p>
          </a>
        </ul>
      </footer>
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
