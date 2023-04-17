import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_1009db5d from 'nuxt_plugin_plugin_1009db5d' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_nuxtplugin24730b7e_3c81311f from 'nuxt_plugin_nuxtplugin24730b7e_3c81311f' // Source: ./nuxt.plugin.24730b7e.js (mode: 'server')
import nuxt_plugin_vuescrollto_3fa3eade from 'nuxt_plugin_vuescrollto_3fa3eade' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_ded74b1a from 'nuxt_plugin_cookieuniversalnuxt_ded74b1a' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_e8f9e660 from 'nuxt_plugin_pluginutils_e8f9e660' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_0d8017b8 from 'nuxt_plugin_pluginseo_0d8017b8' // Source: ./nuxt-i18n/plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_6cf3a61b from 'nuxt_plugin_pluginrouting_6cf3a61b' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_2b651998 from 'nuxt_plugin_pluginmain_2b651998' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_distplugin3c72df81_163db90b from 'nuxt_plugin_distplugin3c72df81_163db90b' // Source: ./dist.plugin.3c72df81.mjs (mode: 'all')
import nuxt_plugin_image_9562a474 from 'nuxt_plugin_image_9562a474' // Source: ./image.js (mode: 'all')
import nuxt_plugin_coreplugin010e7b1e_a2ce00bc from 'nuxt_plugin_coreplugin010e7b1e_a2ce00bc' // Source: ./core.plugin.010e7b1e.ts (mode: 'all')
import nuxt_plugin_pluginse2etesting2506ee7e_b6a3fa96 from 'nuxt_plugin_pluginse2etesting2506ee7e_b6a3fa96' // Source: ./plugins.e2e-testing.2506ee7e.js (mode: 'all')
import nuxt_plugin_deviceplugin_46734d56 from 'nuxt_plugin_deviceplugin_46734d56' // Source: ./device.plugin.js (mode: 'all')
import nuxt_plugin_workbox_4e21c1b2 from 'nuxt_plugin_workbox_4e21c1b2' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_1b264f3a from 'nuxt_plugin_metaplugin_1b264f3a' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_1fcdf4ae from 'nuxt_plugin_iconplugin_1fcdf4ae' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_tokenexpired_ca1e20ca from 'nuxt_plugin_tokenexpired_ca1e20ca' // Source: ../plugins/token-expired (mode: 'all')
import nuxt_plugin_i18n_6a80ea94 from 'nuxt_plugin_i18n_6a80ea94' // Source: ../plugins/i18n (mode: 'all')
import nuxt_plugin_fcPlugin_5a846bc6 from 'nuxt_plugin_fcPlugin_5a846bc6' // Source: ../plugins/fcPlugin (mode: 'all')
import nuxt_plugin_dompurify_9e093c4a from 'nuxt_plugin_dompurify_9e093c4a' // Source: ../plugins/dompurify (mode: 'all')
import nuxt_plugin_storeConfigPlugin_234467e0 from 'nuxt_plugin_storeConfigPlugin_234467e0' // Source: ../plugins/storeConfigPlugin (mode: 'all')
import nuxt_plugin_meta_630a2ca2 from 'nuxt_plugin_meta_630a2ca2' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"@vue-storefront\u002Fmagento-theme","meta":[{"charset":"utf8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Magento2 Integration for Vue Storefront 2"},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_1009db5d === 'function') {
    await nuxt_plugin_plugin_1009db5d(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_nuxtplugin24730b7e_3c81311f === 'function') {
    await nuxt_plugin_nuxtplugin24730b7e_3c81311f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_3fa3eade === 'function') {
    await nuxt_plugin_vuescrollto_3fa3eade(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_ded74b1a === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_ded74b1a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_e8f9e660 === 'function') {
    await nuxt_plugin_pluginutils_e8f9e660(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_0d8017b8 === 'function') {
    await nuxt_plugin_pluginseo_0d8017b8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6cf3a61b === 'function') {
    await nuxt_plugin_pluginrouting_6cf3a61b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_2b651998 === 'function') {
    await nuxt_plugin_pluginmain_2b651998(app.context, inject)
  }

  if (typeof nuxt_plugin_distplugin3c72df81_163db90b === 'function') {
    await nuxt_plugin_distplugin3c72df81_163db90b(app.context, inject)
  }

  if (typeof nuxt_plugin_image_9562a474 === 'function') {
    await nuxt_plugin_image_9562a474(app.context, inject)
  }

  if (typeof nuxt_plugin_coreplugin010e7b1e_a2ce00bc === 'function') {
    await nuxt_plugin_coreplugin010e7b1e_a2ce00bc(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etesting2506ee7e_b6a3fa96 === 'function') {
    await nuxt_plugin_pluginse2etesting2506ee7e_b6a3fa96(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_46734d56 === 'function') {
    await nuxt_plugin_deviceplugin_46734d56(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4e21c1b2 === 'function') {
    await nuxt_plugin_workbox_4e21c1b2(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_1b264f3a === 'function') {
    await nuxt_plugin_metaplugin_1b264f3a(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_1fcdf4ae === 'function') {
    await nuxt_plugin_iconplugin_1fcdf4ae(app.context, inject)
  }

  if (typeof nuxt_plugin_tokenexpired_ca1e20ca === 'function') {
    await nuxt_plugin_tokenexpired_ca1e20ca(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_6a80ea94 === 'function') {
    await nuxt_plugin_i18n_6a80ea94(app.context, inject)
  }

  if (typeof nuxt_plugin_fcPlugin_5a846bc6 === 'function') {
    await nuxt_plugin_fcPlugin_5a846bc6(app.context, inject)
  }

  if (typeof nuxt_plugin_dompurify_9e093c4a === 'function') {
    await nuxt_plugin_dompurify_9e093c4a(app.context, inject)
  }

  if (typeof nuxt_plugin_storeConfigPlugin_234467e0 === 'function') {
    await nuxt_plugin_storeConfigPlugin_234467e0(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_630a2ca2 === 'function') {
    await nuxt_plugin_meta_630a2ca2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
