if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>s(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-1f6e2823.js",revision:null},{url:"assets/index-d0eeab10.css",revision:null},{url:"index.html",revision:"03f14fa5be75671e68366f744167fcb4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"b17fcbd9710d4f1818c670a850ef1e50"},{url:"apple-touch-icon.png",revision:"b1b65b21ba6eb12947f31935d3859edf"},{url:"pwa-192x192.png",revision:"015bfd5d4c4e0e185a38615e12ecd2f4"},{url:"pwa-512x512.png",revision:"17dcae9451eca891d1159a75a6c7e45c"},{url:"manifest.webmanifest",revision:"8d151ef2b79fd52a0e9c8d16d57a5633"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));