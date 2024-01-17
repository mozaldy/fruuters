import { createRouter, createWebHistory } from 'vue-router'

// Define function to load components dynamically
const loadView = (view: string) => () => import(`../views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadView('HomeView')
  },
  {
    path: '/account',
    name: 'account',
    component: loadView('AccountView')
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: loadView('ProductView')
  },
  {
    path: '/products',
    name: 'products',
    component: loadView('ProductsView')
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('AboutView')
  },
  {
    path: '/categories',
    name: 'categories',
    component: loadView('CategoriesView')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: loadView('CheckoutView')
  },
  {
    path: '/admin/addproduct/',
    name: 'addproduct',
    component: () => import('../views/admin/SetProduct.vue')
  },
  {
    path: '/admin/editproduct/:productId',
    name: 'editproduct',
    component: () => import('../views/admin/SetProduct.vue')
  },
  {
    path: '/admin/product',
    name: 'admin_product',
    component: () => import('../views/admin/Product.vue')
  },
  {
    path: '/admin/addproducer/',
    name: 'addproducer',
    component: () => import('../views/admin/SetProducer.vue')
  },
  {
    path: '/admin/editproducers/:producerId',
    name: 'editproducer',
    component: () => import('../views/admin/SetProducer.vue')
  },
  {
    path: '/admin/producer',
    name: 'admin_producer',
    component: () => import('../views/admin/Producer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
