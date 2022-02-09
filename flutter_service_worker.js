'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "ec4365a9433b0174a7b9fc6fc78cc3b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a3d0f9d456d9725057112478122d6cce",
".git/HEAD": "8bf68b8474aad62ff59c0b0375919c00",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5bde68850ebed8363c06d06c38f86d60",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16e24928d63478c03a3fc3f65efe78f3",
".git/logs/refs/heads/mldkyt.github.io": "16e24928d63478c03a3fc3f65efe78f3",
".git/logs/refs/remotes/mldkyt.github.io/main": "aab5bf19db3f210625e8c163a1fb88e2",
".git/logs/refs/remotes/mldkyt.github.io/mldkyt.github.io": "450a9523d5c1e16f4c8c9fbe8cdf8a64",
".git/objects/00/2b089c22f320691fb1558c7571b47f513ecf71": "fef46cfd248faf5f995134fdcee88020",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/09/b3a6230c60faca6a3173aba960661a4862fc5a": "ed7368617af82829c36a0de71e6487dc",
".git/objects/12/94b5ef7597d3e319912042f3c2b8ec323a31dc": "50228b6d3e2c9343bf1042c45a14a2c1",
".git/objects/20/ea017dd33f5233f62d880943aefbbc29215225": "e5738fe006f94a98783ef8de10262beb",
".git/objects/29/de9b5728c8888242d0753e0fce192f62719613": "fc247f97caa64337c4bfc60380b2f896",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/97b5abc3": "0103678adbf0194e3cf79a0ab41f59f8",
".git/objects/3e/1f2fa5ccd59c271364c38fd16c65f4c6946323": "39d9a4c4f2ce6a26a9600817f7d28710",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f0f77682d978ed6cd21fe6a25c376a5ce06d32": "ff7e6d2e4933c6785bdd742fbb722bd8",
".git/objects/48/5a8e0d3294ec27976ddf8a1b2396d4b3350456": "359a7a96185265154bd3f2757c4651ac",
".git/objects/4a/526f43f0fe903e9cd42908dfd568835a833353": "10abdea3c13f4132d26c45551a6d9163",
".git/objects/54/ce58e466b8eaa9627d579a027b00d283749564": "b89dd0e2c50e4f3b767dece72aedc4cf",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0f434a445490ea924b5f7525705fe18fa5ae0c": "22d214c4e82276eb9ed1cb1f6db28afc",
".git/objects/82/fc6e0ef4da9788b724d47c71cc974115cfab91": "859272f3942f9c5c61075c465d0685a1",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/800183a2f4c4ed2b2035ad01c895e76bbe71d7": "29f5a96364629f44c37fc148582d0fdf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b3/107d1fb1a6512ced43ab34092ccb8500c7b828": "868f1ef8783dbb1e28665ecb4cc3d37b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/98724311a0c7e55bd2a30a9cf7fa3238cf5ad6": "6c2c27ac295a9d94df9bb43447faba16",
".git/objects/cc/db682fe4c8e8460d160edc0679577498030544": "578af9e09550239568b72cfd3e9f200a",
".git/objects/cf/919c8fff51c3f2a05821d6f79857784a006053": "f365f892b47f94a8a3f4248b4bca6ae2",
".git/objects/d1/557b00172e2f88527c56ffb396079a345b3846": "cde61a26c7782022695f6d371607d069",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/92da7bd7a7e01df992a992919fe59bb3fe4a2f": "1d5ccbffcfc13fa99bdff0db9ca6d6db",
".git/objects/e1/aa8a1bf9a02c8c71bb5bf55a7740dcfe58ec7b": "98c254a2c5887badfd6fd2b7238c7921",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/79787ac8f0c41852ee6ff10fda00ce0a33af8d": "e84147e4bb9fc1b1d5a9bee4d11e1dd4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/33ffafa2d06c5b198dd7c03d1050d9d94a6f1a": "e3cadf63fa4a33bc084ed71e3ac7fba3",
".git/objects/pack/pack-56fa53942f619a3023e1d1013310baa128186f00.idx": "14106a4446636e9c76603b9a122eb642",
".git/objects/pack/pack-56fa53942f619a3023e1d1013310baa128186f00.pack": "6a9d344e59dd57c45b610245a3c16e6b",
".git/ORIG_HEAD": "d6e6d4762bd04ef6e553c0a3246f6a0b",
".git/refs/heads/mldkyt.github.io": "d6e6d4762bd04ef6e553c0a3246f6a0b",
".git/refs/remotes/mldkyt.github.io/main": "b41782ab89fb45b5aa3c6cfb48185316",
".git/refs/remotes/mldkyt.github.io/mldkyt.github.io": "d6e6d4762bd04ef6e553c0a3246f6a0b",
"assets/AssetManifest.json": "6fbecc1e608701368d0a4a8bd99e03e4",
"assets/assets/images/shitbox.png": "4b227263c89a0537e25281d63efb7398",
"assets/assets/images/shitsuma1.png": "88079ee3d843b979ca427d70b0a2ae41",
"assets/assets/images/shitsuma2.png": "72c8f0cc7cebf723032e7b1472ee0fa9",
"assets/assets/images/shitsuma3.png": "52cdcd7b0e0c1cd27ab121530670fd3f",
"assets/assets/images/shitsuma4.png": "cce293281a30952852b38a908b6a7c71",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2d0a084e2a1de8663e8e5aeb666f0999",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a73eb0d8abfd53dfa849b190430516be",
"/": "a73eb0d8abfd53dfa849b190430516be",
"main.dart.js": "e209a3b90017776b2f1208e18966fd2a",
"manifest.json": "2fb9188af0bb263135877d3e3a776209",
"version.json": "9094aacdae789dccd67fa32109ff1a18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
