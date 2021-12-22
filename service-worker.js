/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "acd1e667560fff05666abb86ecaa1400"
  },
  {
    "url": "api/index.html",
    "revision": "6ed55c18b9bd2f3ffe5f030c930b8975"
  },
  {
    "url": "assets/css/0.styles.b757222e.css",
    "revision": "7b2c702da57c330e1568c27bfdcfb2c4"
  },
  {
    "url": "assets/img/common-table.9e3e74e5.png",
    "revision": "9e3e74e54403d1902d8b5b980de6f978"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/page.4e5bfa4b.png",
    "revision": "4e5bfa4b04fee8b2a06a1cd677c8e849"
  },
  {
    "url": "assets/img/panel.2be4f6fe.png",
    "revision": "2be4f6feb277b2d08480b0dcc481c84b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/table-edit-1.14c4bbdf.png",
    "revision": "14c4bbdf9b94a1017d81e84183eb8b28"
  },
  {
    "url": "assets/img/table-edit-2.1b71e777.png",
    "revision": "1b71e777ebee5414947de871e6140321"
  },
  {
    "url": "assets/img/table-edit-3.fc6110b0.png",
    "revision": "fc6110b00a71f9fc5eea0178dd655664"
  },
  {
    "url": "assets/js/10.54047c48.js",
    "revision": "226146fa3844fc0758828e6abbfacddb"
  },
  {
    "url": "assets/js/11.656c506d.js",
    "revision": "bfc51af02583d88a5f1f788bf45b30a2"
  },
  {
    "url": "assets/js/12.25ebd4fa.js",
    "revision": "7c5c915250f3f48ffbaaaaf747897fdf"
  },
  {
    "url": "assets/js/13.c2b2d01e.js",
    "revision": "bbeb377ad636467fab1318b7ceb8ec5c"
  },
  {
    "url": "assets/js/14.ce9857a4.js",
    "revision": "10fb78c0da736d27198cc734228b0b7d"
  },
  {
    "url": "assets/js/15.b8b8db49.js",
    "revision": "7506c12ee1215b09dc6cd26a00693ce3"
  },
  {
    "url": "assets/js/16.3c433d7e.js",
    "revision": "746295587b1adfcc4350b383fed04a4b"
  },
  {
    "url": "assets/js/17.fbfabcbf.js",
    "revision": "25c6c1d69e5d00555637a4459d109ae5"
  },
  {
    "url": "assets/js/18.2c3d3c30.js",
    "revision": "d47347ede8f694bf07b00577f344aa6f"
  },
  {
    "url": "assets/js/19.e0b3a8b9.js",
    "revision": "926d81b7a04622fd7d8ecc15d887d063"
  },
  {
    "url": "assets/js/2.252f71a9.js",
    "revision": "93757ce7a7f91aaafa09359c0d5a26a9"
  },
  {
    "url": "assets/js/20.b352c2d7.js",
    "revision": "872b09444d9553af875be1a49c51123c"
  },
  {
    "url": "assets/js/21.ed6d1ba1.js",
    "revision": "aaf98c935cad0e4148951ea9637f6a65"
  },
  {
    "url": "assets/js/22.38cacf42.js",
    "revision": "5cb1fefe33e8ef6ce25c212950ec379b"
  },
  {
    "url": "assets/js/23.20214d9d.js",
    "revision": "8c1d40903f49b0e44187a7c7553ffa2a"
  },
  {
    "url": "assets/js/24.87db0ba1.js",
    "revision": "dca2107f4e56e147a8534af73f9915c3"
  },
  {
    "url": "assets/js/25.999196af.js",
    "revision": "f658a4a3226c5003cf2bc374238cf110"
  },
  {
    "url": "assets/js/26.2eaaa9fb.js",
    "revision": "a67bc2f000da712daeb7ddcde7e24b8c"
  },
  {
    "url": "assets/js/27.be8c4b53.js",
    "revision": "6347610bcad6a41dec800b921697fdce"
  },
  {
    "url": "assets/js/28.bc5d32b3.js",
    "revision": "8e1a93b59c5093393e25156d80219772"
  },
  {
    "url": "assets/js/29.59815302.js",
    "revision": "fd3dd903c14a3b4c0987b04ce8b52a1b"
  },
  {
    "url": "assets/js/3.538dc425.js",
    "revision": "47e6d307d4eb354885c0799a080602b1"
  },
  {
    "url": "assets/js/30.eebe835b.js",
    "revision": "9fe00fc4801e67f815c372c99495a319"
  },
  {
    "url": "assets/js/31.8ade8557.js",
    "revision": "f0733f362a4385183991afe714657767"
  },
  {
    "url": "assets/js/32.65d35cea.js",
    "revision": "0c80bf4ae339e2c207ed73116e01fbb2"
  },
  {
    "url": "assets/js/33.d380f75e.js",
    "revision": "2abd5dd9d0c3f219dcd7ee0d3365973c"
  },
  {
    "url": "assets/js/34.07b84935.js",
    "revision": "0c0b4eb36bfa018ddbb60bcdd6149e71"
  },
  {
    "url": "assets/js/35.43535325.js",
    "revision": "8343c469a35817ea4d2282f518187640"
  },
  {
    "url": "assets/js/36.217595bc.js",
    "revision": "6cc8bcdaf878b37386f1d57e272cf67f"
  },
  {
    "url": "assets/js/37.bf34ccc7.js",
    "revision": "b8309095cc1f1a2d83c683f8303a9205"
  },
  {
    "url": "assets/js/4.7e546ee9.js",
    "revision": "af9f2ee06360d6eba533eb26a1f43361"
  },
  {
    "url": "assets/js/5.00b41a8c.js",
    "revision": "cce5bde5a1cfd0afcc796565bff0e725"
  },
  {
    "url": "assets/js/6.da8c5dfd.js",
    "revision": "10dcea8c8b83fee043eb63b7c9a982eb"
  },
  {
    "url": "assets/js/7.fac7fd2b.js",
    "revision": "12616588b733652feaa97294a9bc5c98"
  },
  {
    "url": "assets/js/8.c939ba7c.js",
    "revision": "9b7360bf398a4b65fcea8c9b83971977"
  },
  {
    "url": "assets/js/9.bde74e24.js",
    "revision": "63e32bff60256878692a7177a3c4470b"
  },
  {
    "url": "assets/js/app.c822b358.js",
    "revision": "fa7520824eea9dae18e9b406039f32d9"
  },
  {
    "url": "best-practices/index.html",
    "revision": "2a573bc7ef1a535bcdd8a4f148104dcf"
  },
  {
    "url": "components/action-toolbar.html",
    "revision": "6211aaa5d6d25e2b4297c0e275e0d0d6"
  },
  {
    "url": "components/common-form/compute-from.html",
    "revision": "3f54ac6b47cc954838ad4423aa7a44f7"
  },
  {
    "url": "components/common-form/fetch.html",
    "revision": "8207134262bc66ea440e58d391f7ffd0"
  },
  {
    "url": "components/common-form/fields.html",
    "revision": "d4ebf719a8ebc5c8ddf6f355e0d8a2a8"
  },
  {
    "url": "components/common-form/form-mode.html",
    "revision": "1054355084c16b0493c3df06399894ef"
  },
  {
    "url": "components/common-form/form-rules.html",
    "revision": "4306d4099dfcd0dceec87af555e3164a"
  },
  {
    "url": "components/common-form/index.html",
    "revision": "a50b5900cd5b9707ce4439f0ea0f8c91"
  },
  {
    "url": "components/common-form/link.html",
    "revision": "a247cf4d83e0ca502c3befc264b0b143"
  },
  {
    "url": "components/common-form/slots.html",
    "revision": "5b6b1d2d297784aa66ff708a6cbf8678"
  },
  {
    "url": "components/common-form/split.html",
    "revision": "ee27b131f0abe3342c41e3cd8c253365"
  },
  {
    "url": "components/common-table/columns.html",
    "revision": "d80850f2f9abe4414a4c78ce0d5ec67b"
  },
  {
    "url": "components/common-table/edit.html",
    "revision": "ca2e66eefa53cbf43e296388344c7805"
  },
  {
    "url": "components/common-table/index.html",
    "revision": "59188bee2d06a74053f5208d2584e459"
  },
  {
    "url": "components/common-table/slots.html",
    "revision": "588a77d1fcc6112a530863b9ae6000f6"
  },
  {
    "url": "components/filter-bar.html",
    "revision": "7664cea9cbfab7b885fddd5aae3777f0"
  },
  {
    "url": "components/index.html",
    "revision": "08d0d9caf886a0bb81956c6051bb54e2"
  },
  {
    "url": "components/page.html",
    "revision": "4d2cd1105357f73bebb46db0381f873e"
  },
  {
    "url": "components/panel-tabs.html",
    "revision": "cd6da5e162e149c6a4554aea005439eb"
  },
  {
    "url": "components/panel.html",
    "revision": "683ec42652eba96b0236e43c31391f7a"
  },
  {
    "url": "feedback/index.html",
    "revision": "85f3f65ec0ea15b5f10dd451408fcd36"
  },
  {
    "url": "formatter/index.html",
    "revision": "659d94af692bc773f31bb6a75ce1803c"
  },
  {
    "url": "icons/icon-144.png",
    "revision": "2141673772b11764482bd8a9f19d05be"
  },
  {
    "url": "icons/icon-168.png",
    "revision": "db63ce54c9f3855f7781f9f541c4e299"
  },
  {
    "url": "icons/icon-192.png",
    "revision": "258e99ea945c48fcc328027d9c45167a"
  },
  {
    "url": "icons/icon-48.png",
    "revision": "4780916bc971508a8788e2f9ad51f751"
  },
  {
    "url": "icons/icon-72.png",
    "revision": "cb04e8369fc7e3a79c635541c09b8c0e"
  },
  {
    "url": "icons/icon-96.png",
    "revision": "ecd5ac7c47a4a08c0d6e6e50b4e9f45d"
  },
  {
    "url": "index.html",
    "revision": "dda49e074522aa898fd924d2c8865165"
  },
  {
    "url": "logo-icon.png",
    "revision": "bc7aa854a850931c4ea288a95b999e80"
  },
  {
    "url": "logo.png",
    "revision": "917d418de77e00ade3f921f83966e7bf"
  },
  {
    "url": "preset/fields.html",
    "revision": "82bad6dfa9d22a6b6857fbbb141097ee"
  },
  {
    "url": "preset/helper-css.html",
    "revision": "f8cc4859cc38f034e5a008072785d5d8"
  },
  {
    "url": "router/index.html",
    "revision": "2a83ae3c2924a0f2fe1cef40491b7780"
  },
  {
    "url": "start/create-page.html",
    "revision": "9381e71c1d7d2a9d2470c326107f4285"
  },
  {
    "url": "start/index.html",
    "revision": "3d287f58d9756613c229d6d9c9ff7169"
  },
  {
    "url": "todo-list.html",
    "revision": "e5ba5ae658d841fdb1d92ac552564129"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
