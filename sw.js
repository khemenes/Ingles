/* Speak with me: funciona sem internet depois da primeira visita (a IA precisa de internet). */
var CACHE='swm-v1';
var CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon-32.png'];
var UNITS=["units/u01.json", "units/u02.json", "units/u03.json", "units/u04.json", "units/u05.json", "units/u06.json", "units/u07.json", "units/u08.json", "units/u09.json", "units/u10.json", "units/u11.json", "units/u12.json", "units/u13.json", "units/u14.json", "units/u15.json", "units/u16.json", "units/u17.json", "units/u18.json", "units/u19.json", "units/u20.json", "units/u21.json", "units/u22.json", "units/u23.json", "units/u24.json", "units/u25.json", "units/u26.json", "units/u27.json", "units/u28.json", "units/u29.json", "units/u30.json", "units/u31.json", "units/u32.json", "units/u33.json"];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return c.addAll(CORE).then(function(){return Promise.all(UNITS.map(function(u){return c.add(u).catch(function(){});}));});
  }).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
/* rede primeiro (sempre a versão mais nova), cache como reserva sem internet */
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==self.location.origin)return;
  e.respondWith(fetch(r,{cache:'no-cache'}).then(function(resp){
    if(resp&&resp.ok){var copy=resp.clone();caches.open(CACHE).then(function(c){c.put(r,copy);});}
    return resp;
  }).catch(function(){
    return caches.match(r,{ignoreSearch:true}).then(function(m){return m||(r.mode==='navigate'?caches.match('index.html'):Response.error());});
  }));
});
