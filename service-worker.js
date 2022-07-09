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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/WEB_STUDY/�븶���ڵ�/ReactJS��%20��ȭ%20��%20����%20�����/react-for-beginners/precache-manifest.ce6b72866cfbbb1ad048dcb88f0b0580.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/WEB_STUDY/�븶���ڵ�/ReactJS��%20��ȭ%20��%20����%20�����/react-for-beginners/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
