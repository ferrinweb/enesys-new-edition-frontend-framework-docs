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
    "url": "api/index.html",
    "revision": "f2b73381bde66f8c19b88b5814bf52a4"
  },
  {
    "url": "assets/css/0.styles.eb41f91a.css",
    "revision": "cf6dc5145aab20af1837f0f0d3a5d2a7"
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
    "url": "assets/js/10.891a4cfb.js",
    "revision": "835afd638575c5cf9a14807049f6b55e"
  },
  {
    "url": "assets/js/11.378567a1.js",
    "revision": "7b8af5e0fec7372a182dd29989654988"
  },
  {
    "url": "assets/js/12.eeb4a6bc.js",
    "revision": "e9c9e3c14a765c88f0c375eeb8097499"
  },
  {
    "url": "assets/js/13.d2d021ca.js",
    "revision": "3ffffe12b3b0c2a6ef50cb4d9e830239"
  },
  {
    "url": "assets/js/14.15744202.js",
    "revision": "8e8d0af1af63f5c6e85c3d19e9dc0a76"
  },
  {
    "url": "assets/js/15.a4e0ec98.js",
    "revision": "8b0741f923ee14e2a84b50eac14092c5"
  },
  {
    "url": "assets/js/16.dd9ca7ea.js",
    "revision": "d568225035ce97c322d9c966f144826c"
  },
  {
    "url": "assets/js/17.eeae724f.js",
    "revision": "7ed23b5071f4c9b2805e1c3521ee6026"
  },
  {
    "url": "assets/js/18.0c0db668.js",
    "revision": "7b1d6d7fb2c8d1be7cf55597086411ba"
  },
  {
    "url": "assets/js/19.0454a679.js",
    "revision": "d3096b08c31a2244c0407a016c934020"
  },
  {
    "url": "assets/js/2.022026a0.js",
    "revision": "b140a67bb6a1783a6be8d8c7c1afd94e"
  },
  {
    "url": "assets/js/20.447be1cb.js",
    "revision": "b17de2f884801afe89fda8416f68330e"
  },
  {
    "url": "assets/js/21.b4ad60cf.js",
    "revision": "3878c9db743b21c528f30b8f5d451a24"
  },
  {
    "url": "assets/js/22.5d45af9c.js",
    "revision": "e235a84d42e34ffe420a7a99c7a1da6c"
  },
  {
    "url": "assets/js/23.9b76f8f7.js",
    "revision": "d7d070bc6d4bc4e4b547988ace991e1c"
  },
  {
    "url": "assets/js/24.f77a1050.js",
    "revision": "545d8c780d5f120763f7bdeef1947098"
  },
  {
    "url": "assets/js/25.bb3a21a5.js",
    "revision": "f4c50cf638bce6cc4031b6e91e3f0488"
  },
  {
    "url": "assets/js/26.72ed7931.js",
    "revision": "8fa8b1af42afe0a54e27c8ba24800c54"
  },
  {
    "url": "assets/js/27.83a3464c.js",
    "revision": "4806038abb07cc52af1906adde21943a"
  },
  {
    "url": "assets/js/28.018109b0.js",
    "revision": "0f1f4aa65bcf6f10a542500ae0494de3"
  },
  {
    "url": "assets/js/29.8c4ef89a.js",
    "revision": "fa599b6c4d14c854b61b91ca6cd32560"
  },
  {
    "url": "assets/js/3.21a3e89b.js",
    "revision": "b7710abddd39831d35534b5510bec952"
  },
  {
    "url": "assets/js/30.2615f14e.js",
    "revision": "137726c493f6cf08f96b54ccdd3637a9"
  },
  {
    "url": "assets/js/31.20b88b5a.js",
    "revision": "7518a7f40ad07dfaf267813eeccb0cc5"
  },
  {
    "url": "assets/js/32.fd98419b.js",
    "revision": "27c3fad7aad9e063050ecacb1e2ec7d0"
  },
  {
    "url": "assets/js/33.171ac303.js",
    "revision": "1a1b0403cecb273ff10c7de9142d9c18"
  },
  {
    "url": "assets/js/34.e728a315.js",
    "revision": "aaee0c11b0dd5f515ac672227201530f"
  },
  {
    "url": "assets/js/4.51b7dcd2.js",
    "revision": "c31410d32ce03da2f35aef567ee97ded"
  },
  {
    "url": "assets/js/5.c6b2fa09.js",
    "revision": "59eee9f6cb996b46d6cb193dbceee649"
  },
  {
    "url": "assets/js/6.34196948.js",
    "revision": "c50741b8890862cba265376077da0840"
  },
  {
    "url": "assets/js/7.6cf44381.js",
    "revision": "00a3472f2edcbca935d9a9d017abf3b6"
  },
  {
    "url": "assets/js/8.2038f433.js",
    "revision": "143a3bf3a39818ac05630b99be877355"
  },
  {
    "url": "assets/js/9.da7bffb1.js",
    "revision": "aa73f8a46aabae9b557d713411d08d0c"
  },
  {
    "url": "assets/js/app.24852fbb.js",
    "revision": "f8405f338fd24af5881b8e428158f603"
  },
  {
    "url": "best-practices/index.html",
    "revision": "68eb71741c3edea8f30d026eb797700d"
  },
  {
    "url": "components/action-toolbar.html",
    "revision": "b312655308879bfde37350542a519f2f"
  },
  {
    "url": "components/common-form/compute-from.html",
    "revision": "79560ac76e233cf4756b326649abf034"
  },
  {
    "url": "components/common-form/fetch.html",
    "revision": "a99b6eddef1e23e81f727afdd626474f"
  },
  {
    "url": "components/common-form/fields.html",
    "revision": "4839589c0d1dcf3bce06fe5d2f1dba19"
  },
  {
    "url": "components/common-form/form-mode.html",
    "revision": "aff6fb2b17e5607fc048b8549425fefd"
  },
  {
    "url": "components/common-form/form-rules.html",
    "revision": "d94cd5551eab2f59094c24e59542a737"
  },
  {
    "url": "components/common-form/index.html",
    "revision": "6637e053627d4e3a6258435b2eaa24d3"
  },
  {
    "url": "components/common-form/link.html",
    "revision": "7f6740fe05c7c5dd28599a5e47660f62"
  },
  {
    "url": "components/common-form/slots.html",
    "revision": "e80156d1e723ee15c89e8257161fc799"
  },
  {
    "url": "components/common-form/split.html",
    "revision": "462ca703572849fef125cc9bbbb7c55f"
  },
  {
    "url": "components/common-table/columns.html",
    "revision": "819d628d0595ac05390117d845f1ab40"
  },
  {
    "url": "components/common-table/edit.html",
    "revision": "da3c27f1ecbff62b46705b8560ccd75e"
  },
  {
    "url": "components/common-table/index.html",
    "revision": "2a6819a88b327e11565285ddb371482b"
  },
  {
    "url": "components/common-table/slots.html",
    "revision": "f13d1e15cd777a6e215748d1815571a5"
  },
  {
    "url": "components/filter-bar.html",
    "revision": "6c0e2a5828d2ea6e7400b35701992d29"
  },
  {
    "url": "components/index.html",
    "revision": "997bf1287401f4edc658991edabbe452"
  },
  {
    "url": "components/page.html",
    "revision": "729b3d27aa2918d48f6112f0bf0d364a"
  },
  {
    "url": "components/panel-tabs.html",
    "revision": "52cafffe9e8700861ab9d7dff91fe724"
  },
  {
    "url": "components/panel.html",
    "revision": "8df7ab04bb50e1ad3c5a69a2e8750a59"
  },
  {
    "url": "feedback/index.html",
    "revision": "5b341ca1a1bcd393531379579fb9670b"
  },
  {
    "url": "formatter/index.html",
    "revision": "bc945973017a87b547be267207363ba4"
  },
  {
    "url": "helper-css/index.html",
    "revision": "5183178885e520cbecaacfa551d118d8"
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
    "revision": "69b55726b0b3578298594f6fdda2e29d"
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
    "url": "router/index.html",
    "revision": "0afeff4ed5b081f11bc701695d2bf73c"
  },
  {
    "url": "start/create-page.html",
    "revision": "3dcccd4b58102d21e5b9bdc14b65c4b5"
  },
  {
    "url": "start/index.html",
    "revision": "3324f88b0221c4d7c96ee949f6121edf"
  },
  {
    "url": "todo-list.html",
    "revision": "19b49a1459e98706bd40c703bd0c4aae"
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
