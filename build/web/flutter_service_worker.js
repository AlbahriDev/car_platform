'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a0a8453e862e704846f41de7b6feb96d",
".git/config": "3a44d26415eff1c0f6b5839928b88d5f",
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
".git/index": "edbcf2eff4c01a4ac272a5f3691edcf5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2841b3220a5abbfec651ef72154058ec",
".git/logs/refs/heads/main": "e789b8db181de5c050f95ac6517841a2",
".git/objects/07/76eb9c3e55bb559c25024c568cb90215e4393d": "1ef6d438a5504761fbb7b3e40f884e4a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/13/38f9df779b84054be404777e52793451e6f02c": "3ead35a47c86e9510fed6231ad28742d",
".git/objects/18/845d28a46f3139aa910acf29abce8a822c0f11": "4674bd95dce94676b6143a0e67a3bc19",
".git/objects/1b/1c628a1e7303fd0320aa216033748b86ae9541": "312b82f9877a5ff952aae2238db3783e",
".git/objects/22/3cf685086e2bb0b01a2ce255c0ec2ae2643572": "46949e3b4681e87b38bf7f5c0f245c7e",
".git/objects/22/4c1aa3994979cce40fd3e795177143afe0ff4d": "f0169f0f0286b06a365e90e414668e6d",
".git/objects/2b/ce3b34cf852a643650cc92fa16bad50333130f": "fcce17e2aaf7e95976289b5d9a85cbf8",
".git/objects/2b/f05acdaed3ec2b698efad7d7e2e36f8e0abb54": "523beedde6cf2994b4b52b7959bda32f",
".git/objects/2e/605fffac414f9aa6e29779765f51a3742fef75": "7f85a4b67ac688d290730f821e7e2ef5",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/eb5f1b90552e5bc4d0ad911f2792e4de6dd54b": "16c5411298ee8c578bee2c0f94acf03f",
".git/objects/47/fb3b46d8bff1baf4790dbb6b8d48ff91742560": "5c087a9b46bce55ef48f99e3ccfc50b6",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/071fdb83a2616e41cfe78fb2f518db83836732": "cf61f70a107b0cac8bc2e81d6c1c512f",
".git/objects/54/db6bcdf27ee38522d60463d7a964a9a2c502a2": "a33213c6fea8d2ce00dc9f1c55c6a639",
".git/objects/55/92de1fefc1c3722762a7b0349c6f6bdff7d9bc": "cd6c6cc5e99d935da639387085e6c8e3",
".git/objects/59/2cc5225aafc29e61c6b1af55be3a0af97273fe": "86d6a42dd6d12186b71701ec9fc8de13",
".git/objects/5e/d08d3aea52bfcc9b0c6f95572786aa4206e9df": "dbbdefdf6032911f74090507794efb4f",
".git/objects/60/98d727f39079bf04550c025e71ee285f590740": "8638bb2d14cd7090a2c00da0a763fae9",
".git/objects/64/b946b9fd32201cc2b1ce22e0b97e7053fbae86": "872e2b1c40c948f663f7adeeadf25fd0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/2b07125c67d3cb46140ff9100d507e371a4a2b": "bdc6f4c67edf4ee572c35c2b9181a722",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/356f4472f6535f0db75bfac276ae6f09d89b9d": "ec5b75fb777f3fd99b008577146de3b7",
".git/objects/73/6ffcc12fc32d6a525a1492d024c6451c9542b8": "f7d066deeeb8a3ad129aa44217990b78",
".git/objects/7b/2745fa453c39ddf28ed2c2f333fa5cf38e073e": "68d2b9613b2eed74225383d25236599c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/4310c1233dad037aa0d6f201195726c85abec6": "0a07153cf2e84b0b01c3d8871c94abfd",
".git/objects/82/0403ebe2da0350b4171620d34f52bc32fa8297": "51667a8cad8bd7b7ad6792be49a12125",
".git/objects/82/cae62db36a0d4278c73e97f797ee9800c07315": "e14c783e30a8ec712b424dd95dfe4a0c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/f4af445a5daf59b525787fb00b94024b10b7ef": "30de0f20bce4785387d698427c5ecebe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9c/2f78586b3502e248240e68833d52dca0583db3": "c10beab2a3ad0f35a51a165d62566ae4",
".git/objects/9d/84fa9cbff40a5549b92ba63dba897792231f92": "1671e5918733efc375fbf580424d6e72",
".git/objects/9e/5c7e18d196a5bebc3837ae35644fb20f83f1f4": "5b7d1944b3e03fdafe792f4b279c702f",
".git/objects/9f/214fb142d31d6495927d2e788abfa7aeb7d6b8": "909644ada8b376b2495df28029d0f514",
".git/objects/a4/2ee336af8837116ad23c7595c3384660c4c55e": "3b195733f6b82f418647b17b22eb130a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/ec084dfe031ed7f6df17ec91d224f38f8fad2f": "a3d3ca169ec66c286da5508460d9c480",
".git/objects/ab/4ddb9ad8a7159393f2a33efb43d95fabe8e288": "f0aa14d54a0c86e4982bbd3befbab1e9",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/3e338b680944f3ba1543cb25ae23986fd93574": "db9a8f0394ec7ae3bc2211cb1f849b2d",
".git/objects/b1/576061487988deff617fb34dac39723127bc08": "509ae4914a2435a0082b174bdbfdfbf1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/4a020690b6551ad54a48a85b0dd9834c446e53": "07d1dd2d1bba9866ea6b6e3d02cd17cc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3f0a785306cd2550926651b485d155c29d15f5": "05e478d2bfb30848737ccbdb4e8cf5c3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/9104f967777ead2e728fcdb3ba60660892ac7e": "4014747f4d7fd6ce6268d885b3c9a5a4",
".git/objects/e6/c6608f99c9caf30ab2e546bc3e8719cb4c98da": "5803c3dc80fe4a22b6b93a413e63b5fd",
".git/objects/e7/fabc198d16c7d94005bd0b62f32b10b1c8954c": "b325b9f4bb71339d4ed85e1364e14e39",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/75f761c4d14f2fea7cb2ef066a78a538ac1370": "9b91038775c7dd532b127bf60a252b41",
".git/objects/eb/39031e783f6131ddb36b37db38ce44c1687fed": "04520041a75cc5f945e5bf388e168820",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/5d2801e7482db30c517472fee8f456e362818b": "6435ab48cd473a3d617a280fca9ba405",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/5140e953d5b8003349cb5a035a64790c24302a": "d6a5cf29c7991102875bd9808ebe462c",
".git/objects/fa/0c7dc98090307887a51722dbd13cf509e94b02": "85534bcd9ef427961453af1da3ddc812",
".git/objects/fc/f8e7c81385dadd0e85b38a0191a8421a370640": "fc2286705756f4950005992d34616397",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "2f2850b7dde6642cb3fe3f08e7a94f47",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/NOTICES": "32a12292acbdaf4ed426aea28c8cb8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"css/style.css": "5a2a5190a7cb596d7d1c4d77c21cb11e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "316aa42755083f9ef87b793e4fd4a59a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43967c378e41d12a2802d46065e55546",
"/": "43967c378e41d12a2802d46065e55546",
"js/admin.js": "47e5879cebed1f54122bc30b1a7d79bf",
"js/auctions.js": "693c807a23dd8fe0260e541b5d23ea36",
"js/auth.js": "3dae4b32e28829ad0a632bb946802e73",
"js/car-details.js": "651d6b6626991ee802c3659a5075316a",
"js/cars.js": "b049564a899032a226689ade729b6f0f",
"js/compare.js": "377051631e24b39e10b1a4f4b67a74e8",
"js/main.js": "d6ba15ab459dd892e1683ec2d72c3e9d",
"login.html": "53f20d1cf50cebf0e2c945d88ccff853",
"main.dart.js": "641d9346e9ffc59f0ea9461fc172340d",
"manifest.json": "ef5084f56c99a30a399b0cdad76f2e72",
"pages/about.html": "c3e9bd43d013a975c12aeaa85c7ea493",
"pages/add-car.html": "0e2f50ba60bade187b5e3d174f0bbd6e",
"pages/admin-dashboard.html": "8cf8fc43c024f81cb7206c3e128636eb",
"pages/auction-details.html": "70d3f46eba6a6ac0b447510faf86be4a",
"pages/car-details.html": "1af40af8f50901ce227053d519d0f022",
"pages/categories.html": "c80bda1a05c548552dfaf9c05c7a1e9d",
"pages/contact.html": "7ef6691dc4f174d06b72c07009a6f962",
"pages/create-auction.html": "9d73efc895018a2f408ca7cc0a88e0c0",
"pages/edit-car.html": "c6a77e24b5d34057b20edb20d1a27485",
"pages/ended-auctions.html": "49491dc4027d4adc3189dd6e5742e5bf",
"pages/favorites.html": "7d0e6c413b452b55bb14e27813128686",
"pages/messages.html": "a2d8d97a2b8640b182c8015a87338451",
"pages/my-bids.html": "858b650c54f06a495a0a72208e535426",
"pages/my-cars.html": "15e003f8d918b980b21f00c75eafef1c",
"pages/notifications.html": "25c8aec708b98708dcd9eeba79951a98",
"pages/profile.html": "e65ce96c752c90c0f5287d78bdbca5bf",
"pages/search.html": "071d569ff65760a6c044d102ec223713",
"pages/statistics.html": "180da813fec5b5d84b5549b581971d49",
"pages/support.html": "99cddc14736c43ea518ce24df909000a",
"pages/transactions.html": "d915ea720967cdfc3445b6cbf15600b5",
"pages/wallet.html": "55f341e0fea797dce75fa77dd0170af1",
"register-seller.html": "89f8d2d806326f3ba1d088a5921141af",
"register.html": "a0f0e9d9d039109eaceccc8ff8716506",
"version.json": "2c54f0c7959096b99d09312686539c8c"};
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
