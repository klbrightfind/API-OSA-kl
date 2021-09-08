import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

import _3522283d from '../pages/account.vue'
import _4242db72 from '../pages/additional.vue'
import _73761338 from '../pages/form.vue'
import _19cc34ae from '../pages/resource.vue'
import _f2c9a11c from '../pages/safety.vue'
import _62061b48 from '../pages/search.vue'
import _68fa0a62 from '../pages/index.vue'

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _3522283d,
    name: "account"
  }, {
    path: "/additional",
    component: _4242db72,
    name: "additional"
  }, {
    path: "/form",
    component: _73761338,
    name: "form"
  }, {
    path: "/resource",
    component: _19cc34ae,
    name: "resource"
  }, {
    path: "/safety",
    component: _f2c9a11c,
    name: "safety"
  }, {
    path: "/search",
    component: _62061b48,
    name: "search"
  }, {
    path: "/",
    component: _68fa0a62,
    name: "index"
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
