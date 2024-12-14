'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "00b21ce261eabe92fa84d7b7c59aad21",
"assets/AssetManifest.bin.json": "d2b7f2e2c1abd433c5edc27a695f4665",
"assets/AssetManifest.json": "2662a183e568c39040366f151a31e6ea",
"assets/assets/Bell_Demo_JS.svg": "a4cc19086d02cad5fb904b221bd61059",
"assets/assets/big_snow.riv": "6db5090dfdfc766e42e010d0e9de7444",
"assets/assets/bottom_nav/feed.png": "bea50089b50d970657a8795898f27043",
"assets/assets/bottom_nav/feed2.riv": "2e2be242ef718b5aabd7268b3b07cfc4",
"assets/assets/bottom_nav/feeds1.riv": "1d7cce1f071519c5873997f4dd668cb2",
"assets/assets/bottom_nav/feeds_ac.png": "a6533f485aea8ba2baed0605e4937b2d",
"assets/assets/bottom_nav/home.png": "8cf7f3edc5c6c741f563cfcdd1dde7ce",
"assets/assets/bottom_nav/home_ac.png": "8d18de0e6fc082a3960f5a0fa8e2d837",
"assets/assets/bottom_nav/tree.png": "f98bec2cfbeaf4caf233cc1f051810b6",
"assets/assets/bottom_nav/tree.riv": "a60ffc729664488b3f7b2ff23af607a5",
"assets/assets/christmas_tree.png": "cca6aef18f4f585bbfd3416bd69a5094",
"assets/assets/decorate.svg": "af241645ae6e2e5f1a172e26c0bfe71c",
"assets/assets/def_prof.jpg": "39750249d841decb74354f7c2f08f284",
"assets/assets/fonts/Blabeloo.ttf": "e8491b25da881cd988449115a1da10d6",
"assets/assets/fonts/Kharabeesh.ttf": "89d5dcad3fbb5a3798e0b7d5e3e77203",
"assets/assets/fonts/NotoColorEmoji.ttf": "ddf7298c8439e2ff24262b16fc8e26a3",
"assets/assets/green%2520gift%2520box.png": "0e03d53e87a1305e2b04b5f7bcddf2a5",
"assets/assets/icon.jpg": "36cc08c82d1347c9fd6bef92be04fe00",
"assets/assets/lights.svg": "91ee4cd189f6c52caa32b8df51fce254",
"assets/assets/loading.json": "72da17ff9f0edfc0d238c46d3c445542",
"assets/assets/loading.riv": "2195d1b3ba7f5a3021ce8ef27e1a9ff6",
"assets/assets/login/christmashat.png": "4ec68ec2a17f4fb9226bd993d9bfe1b7",
"assets/assets/login/Ice.png": "d45d37daf6ca842b8db530aabc0625f5",
"assets/assets/logo.png": "bba683aba8f60cd01944490ecbec80c9",
"assets/assets/onboarding/animationtree.json": "40c949314a241dc1a7abfa83fcd3e749",
"assets/assets/onboarding/bell02.json": "e83094b0ce95afe6af696edfc478e656",
"assets/assets/onboarding/homes.svg": "9a9c7641c145caec45bbf3f3242f8429",
"assets/assets/onboarding/jinglebell.png": "b00176fa9045c8828cf64100c4544438",
"assets/assets/onboarding/lottie_script.js": "fbf006f5bdfe38874ece460f0a0e250c",
"assets/assets/onboarding/onboarding1.svg": "31c80af5165dc47ecb93d648650030a1",
"assets/assets/onboarding/onboarding3.svg": "a874279f25f41a2c0cddaa7ea3bf7805",
"assets/assets/onboarding/snow.json": "2eec8864f097f4b4416af7d47ae74d9e",
"assets/assets/onboarding/snow.riv": "925d68d87ff0e68a7806ccfddf134bf9",
"assets/assets/onboarding/snowflake.png": "59b01b6f181e94e9d7f23ee3fc7f6ac9",
"assets/assets/plane_indicator/cloud1.png": "136efc4db543d4f6fa78e5b3ed695cdc",
"assets/assets/plane_indicator/cloud2.png": "a9912c93911e938d58131b7fb07b34f3",
"assets/assets/plane_indicator/cloud3.png": "0e663b4f9630f0d13942a5e0cb1641ea",
"assets/assets/plane_indicator/cloud4.png": "2fa64f60a94c34c631d48051733f5e55",
"assets/assets/plane_indicator/plane.png": "36c859c87c2e772c608dfbaf658d1de4",
"assets/assets/room/background.png": "af19b4c7f6f32fff9277746332389967",
"assets/assets/room/For%2520santot%2520alert%2520msg.png": "a09d7c0ea8538c2f152d32cae1542631",
"assets/assets/room/home.png": "95faab81de0435ed7ce5dcd85d75516c",
"assets/assets/room/santa%2520on%2520gift.png": "740abc271435e05ac55380c5895ab700",
"assets/assets/room/santaa%2520from%2520box.lottie": "474cd044770a2a45dcced97d36eff90d",
"assets/assets/room/secret_santa.svg": "e4c49ec7097fbb1692d32c26ae7b66e8",
"assets/assets/room/snata%2520alert%2520msg.png": "ab4448ba22251920a652db3501a650e0",
"assets/assets/rooms/hohoho.lottie": "198950c3649f467789967419c7a9c35c",
"assets/assets/rooms/santa_cap.png": "bdf74f15a561516dac261e9463fd573d",
"assets/assets/slow_snow.riv": "f5e632e0a492da9250abf92366411d36",
"assets/assets/snata.riv": "15e8237cb6238ab7c5a4084d7ca32fda",
"assets/assets/splash/bell.json": "8d2e95bb19d31e4cc3acb0feddafdfc0",
"assets/assets/splash/logo.png": "8a1312a33085b153bb17ac780f9527fd",
"assets/assets/splash/topdecoration.png": "9714c7b666fb5c79e99a9a6f6a73a0fc",
"assets/FontManifest.json": "fd848da512c8488bce50dd6e5a7fc46e",
"assets/fonts/MaterialIcons-Regular.otf": "e462a057ab701c545ea93d6604859e8b",
"assets/NOTICES": "6b75d4de6e2df3a578ef8b8948951e92",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "f192beaa8ac479c9987de588fa3c4f85",
"firebase-messaging-sw.js": "f5ef5bfe7837f246b2fe72c70128b030",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "83d3586b10e38cff0660a45a7b5a64e1",
"icons/Icon-192.png": "95f458c2459831e8a71bb2c1a4bd1c0d",
"icons/Icon-512.png": "7b87ec9f4e7a4a80508604560ae84688",
"icons/Icon-maskable-192.png": "95f458c2459831e8a71bb2c1a4bd1c0d",
"icons/Icon-maskable-512.png": "7b87ec9f4e7a4a80508604560ae84688",
"index.html": "966bcf34945f06cbd9b70d03bc71fa44",
"/": "966bcf34945f06cbd9b70d03bc71fa44",
"main.dart.js": "93b8d526c129cb28af450f4effcaeff5",
"manifest.json": "3ba0e97488fc1122052361228a7cc80e",
"screenshots/fdy.jpg": "18764985bd2b7b5dad9b4e9600b994a2",
"screenshots/screen1.png": "840794df46af16a39620f6a1c5440a7f",
"version.json": "07f7f079f623233184b0bc8f8b814580"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
