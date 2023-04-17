import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe316e24 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _1e098bb8 = () => interopDefault(import('../modules/checkout/pages/Cart.vue' /* webpackChunkName: "" */))
const _78a44a44 = () => interopDefault(import('../modules/checkout/pages/Checkout.vue' /* webpackChunkName: "" */))
const _4b1ba62a = () => interopDefault(import('../modules/checkout/pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _2c6a0f96 = () => interopDefault(import('../modules/checkout/pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _5813558f = () => interopDefault(import('../modules/checkout/pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _41a12136 = () => interopDefault(import('../modules/checkout/pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _c40e7ede = () => interopDefault(import('../modules/checkout/pages/Checkout/UserAccount.vue' /* webpackChunkName: "" */))
const _3a8cc38a = () => interopDefault(import('../pages/Cms.vue' /* webpackChunkName: "pages/Cms" */))
const _824ade7a = () => interopDefault(import('../modules/customer/pages/MyAccount/MyAccount.vue' /* webpackChunkName: "" */))
const _7f0c5f31 = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressesDetails.vue' /* webpackChunkName: "" */))
const _a7b6f0da = () => interopDefault(import('../modules/customer/pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "" */))
const _3dd0a56d = () => interopDefault(import('../modules/customer/pages/MyAccount/MyProfile/MyProfile.vue' /* webpackChunkName: "" */))
const _4557589e = () => interopDefault(import('../modules/customer/pages/MyAccount/MyReviews.vue' /* webpackChunkName: "" */))
const _6729c9c2 = () => interopDefault(import('../modules/customer/pages/MyAccount/MyWishlist.vue' /* webpackChunkName: "" */))
const _620d9671 = () => interopDefault(import('../modules/customer/pages/MyAccount/OrderHistory/OrderHistory.vue' /* webpackChunkName: "" */))
const _61b41cbd = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressNew.vue' /* webpackChunkName: "" */))
const _c4bb7d28 = () => interopDefault(import('../modules/customer/pages/MyAccount/ResetPassword.vue' /* webpackChunkName: "" */))
const _3656e886 = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressEdit.vue' /* webpackChunkName: "" */))
const _6ab81be2 = () => interopDefault(import('../modules/customer/pages/MyAccount/OrderHistory/SingleOrder/SingleOrder.vue' /* webpackChunkName: "" */))
const _76adc252 = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _5dc742c4 = () => interopDefault(import('../pages/Page.vue' /* webpackChunkName: "pages/Page" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/default",
    component: _fe316e24,
    name: "home___default"
  }, {
    path: "/default/cart",
    component: _1e098bb8,
    name: "cart___default"
  }, {
    path: "/default/checkout",
    component: _78a44a44,
    name: "checkout___default",
    children: [{
      path: "billing",
      component: _4b1ba62a,
      name: "billing___default"
    }, {
      path: "payment",
      component: _2c6a0f96,
      name: "payment___default"
    }, {
      path: "shipping",
      component: _5813558f,
      name: "shipping___default"
    }, {
      path: "thank-you",
      component: _41a12136,
      name: "thank-you___default"
    }, {
      path: "user-account",
      component: _c40e7ede,
      name: "user-account___default"
    }]
  }, {
    path: "/default/Cms",
    component: _3a8cc38a,
    name: "Cms___default"
  }, {
    path: "/default/customer",
    component: _824ade7a,
    meta: {"titleLabel":"My Account"},
    name: "customer___default",
    children: [{
      path: "addresses-details",
      component: _7f0c5f31,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details___default"
    }, {
      path: "my-newsletter",
      component: _a7b6f0da,
      meta: {"titleLabel":"My newsletter"},
      name: "customer-my-newsletter___default"
    }, {
      path: "my-profile",
      component: _3dd0a56d,
      meta: {"titleLabel":"My profile"},
      name: "customer-my-profile___default"
    }, {
      path: "my-reviews",
      component: _4557589e,
      meta: {"titleLabel":"My reviews"},
      name: "customer-my-reviews___default"
    }, {
      path: "my-wishlist",
      component: _6729c9c2,
      meta: {"titleLabel":"My wishlist"},
      name: "customer-my-wishlist___default"
    }, {
      path: "order-history",
      component: _620d9671,
      meta: {"titleLabel":"Order history"},
      name: "customer-order-history___default"
    }, {
      path: "addresses-details/create",
      component: _61b41cbd,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details-new___default"
    }, {
      path: "/default/reset-password",
      component: _c4bb7d28,
      alias: "/customer/account/createPassword",
      name: "reset-password___default"
    }, {
      path: "addresses-details/edit/:addressId",
      component: _3656e886,
      meta: {"titleLabel":"Addresses details"},
      props: true,
      name: "customer-addresses-details-edit___default"
    }, {
      path: "order-history/:orderId",
      component: _6ab81be2,
      meta: {"titleLabel":"Order history"},
      props: true,
      name: "customer-single-order___default"
    }]
  }, {
    path: "/default/Faq",
    component: _76adc252,
    name: "Faq___default"
  }, {
    path: "/default/Home",
    component: _fe316e24,
    name: "Home___default"
  }, {
    path: "/default/Page",
    component: _5dc742c4,
    name: "Page___default"
  }, {
    path: "/default/:slug+",
    component: _5dc742c4,
    name: "page___default"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
