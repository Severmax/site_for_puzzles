'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d021a1b2a65e92c4884fa9f7c6484430",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b269447892a4ac6575f351535106a24",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8ac5c98c9f8703f3999c9be0c4ab868",
".git/logs/refs/heads/main": "82a86ff50aa20e5adb512ab301d5bd53",
".git/logs/refs/remotes/origin/main": "ea02912964781a40fbd653a32429f727",
".git/objects/07/ad3e55b136a18c240cba71331d6b0312d94f27": "9bb0e305eff35070cdd2f8f45d4c7072",
".git/objects/09/a9d4db25fdcfee242e1823e72a358d8299cd80": "b2e473a63cfb9689cd0fc289d4405476",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/30/e2a7c5a7263033cc6e9eae1305a60f6df29e52": "e1f302ed4a7febec42b9e58c0b59f438",
".git/objects/3a/5f707e742a2c1f5d6ce2ef7042e53f5f707ead": "9e6bfa81e2efcc3b2fd804080dcd1d35",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/1bc3eb39d7be62a21d37618d60c2f7f61e476a": "bb553379cf98c3ed3f69d840a8f889fc",
".git/objects/51/b8137c20eedb706962891b397fff766fd0e45b": "b579fee756a93a2c849fa49d35b0c85a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/c0ee05ebc451662b68feaa11fd51058410f3fc": "51f8fb9fed088e28e076903270c2da57",
".git/objects/6a/8a4083f280899476723ce1f1a1ff7221b95909": "666023283e1a334c11b57777610370d0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/6bfdbba92d0c32dffca37a62d156a22dce0f44": "5c5009caa7228bf877ac067568a16e7a",
".git/objects/75/f43e4d645fc15587c0805522941393aaa84b9e": "dca45332a9003964f82342d5912b7a94",
".git/objects/7c/b7802bfa0889bfde0653baf5ca63b9e6642815": "1d57f9cc4bd9ef1801caa5aee189f866",
".git/objects/8a/d705c95b10381873d0aafbc53cd9d6ba29f89c": "ed797e5a27f8dd97ae95ffde52cce052",
".git/objects/8c/0cfd0d9e9a39598e618cbd0f701069d18c054f": "edc0fe759caaea35af25f4d1573764c5",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/94/3ce0d4ea24caa910cb44923bfcf6e8489c6026": "14c054c1f83266604a421514e7e4dcf1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/b2/73cde6d58475bd951df539a0bc7b6d03306238": "cb45b56bed0dbc41ceb95ebd6ec60b8c",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c5/9fea6c1827aa8e91e4faeaf641db649cbb4c47": "c0cc7a5544343068ea64e9de391f8f5c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/43e57515e31efd7b7d41379f1df42f9da5b002": "afb76fb7e5b14921bd3ca80c62140d55",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8a4e7846d169042e78378e3664b5e62968d9f7": "ab7f32452e6ae571fb2a662726b81bdb",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/36b837d1077adc901ba9a3265a4889dfd9225c": "e05f18eb88db9ced0b2f95dd8217e8f6",
".git/objects/e9/0c3b1e02395eada9a8f7e2c7c47128b81a8f68": "440fa75f8f225031dbf53bed0924d761",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/77bd75141fda592f4c0275d7665b6a198cfeda": "9f7b8ec26a1a7b4dcb5be87e122c47cc",
".git/objects/ec/10e2c33a2e938317d347d9ecbd8134e91b0c04": "bd3796ad52c733bd38eb7358808a74a9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/d033bef3c1152a694d312d32ef5a789c4a8759": "37fd0263fa5ad58319c82e42938cf9e6",
".git/objects/f7/de41ad4d9b70614effa5b574dbe3953dd14930": "461c436417557919bc041ff88847dcea",
".git/objects/fc/154616d3d8959e496a98d7fc9526e1fbd3eb87": "bec427b2002721a369e9b07bc23fa7cd",
".git/objects/fe/9dbcdcfc3f57f688cf3b5e53b7852e0f1dcefe": "e66ab8916296e12454f382d1714fc95e",
".git/refs/heads/main": "ee15ed3b7ad983e45d8f859a966f3309",
".git/refs/remotes/origin/main": "ee15ed3b7ad983e45d8f859a966f3309",
"assets/AssetManifest.bin": "e004fb7877f9c66a756fd96ca088b83f",
"assets/AssetManifest.bin.json": "6818b6951885ee24b3dd6fe5eeb40d15",
"assets/AssetManifest.json": "140cadb0a58b9e01ff8ecfe52ab85275",
"assets/assets/hero_bg.png": "dbfa51d6bc3a09cbd3d668b56c480234",
"assets/assets/icons/celebration.png": "78ed93df3b52c93722f126ec5cb98372",
"assets/assets/icons/mind.png": "5e5242bb1438f8f602c1190bbdcfa986",
"assets/assets/icons/premium.png": "165a33359f0fad9436eac154cd26b656",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "229418e169dc969e6a103af295647556",
"assets/NOTICES": "522d62035bb79b8ebb4aad22ffc7edae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "f3341ccb5f525b716e3898063b2faa29",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "63847082f91054838af07c98bdf499e4",
"icons/Icon-192.png": "6d0a6adf942ea45733d56501b3677301",
"icons/Icon-512.png": "c9a4ca0706759c86429c61ab89d0b06b",
"icons/Icon-maskable-192.png": "6d0a6adf942ea45733d56501b3677301",
"icons/Icon-maskable-512.png": "c9a4ca0706759c86429c61ab89d0b06b",
"index.html": "5c7e002bedc8a9785087dec97f773871",
"/": "5c7e002bedc8a9785087dec97f773871",
"main.dart.js": "a4d9d001aa342533138cbbd5381cbb76",
"manifest.json": "f68a01fc0f6e4c673ffcf781a1a425f0",
"version.json": "a2f0bc0d32d39400e7592c0141f661fd"};
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
