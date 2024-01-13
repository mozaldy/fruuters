import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ProductsView from '../views/ProductsView.vue'
import SetProduct from '../views/admin/SetProduct.vue'
import ManageProduct from '../views/admin/ManageProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offers',
      name: 'offers',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/admin/addproduct/',
      name: 'addproduct',
      component: SetProduct
    },
    {
      path: '/admin/editproduct/:productId',
      name: 'editproduct',
      component: SetProduct
    },
    {
      path: '/admin/manageproduct',
      name: 'manageproduct',
      component: ManageProduct
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
