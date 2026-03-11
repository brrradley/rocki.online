/**
 * Service Worker (PWA)
 *
 * - Handles incoming Web Push events
 * - Persists "latest push" to IndexedDB so UI can show it
 * - Broadcasts to open clients so Home can refresh instantly
 */

const DB_NAME = "seedy";
const DB_VERSION = 2; // bump so onupgradeneeded runs + we can create missing stores
const KV_STORE = "kv";
const CACHE_NAME = "rocki-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      );

      await self.clients.claim();
    })(),
  );
});

self.addEventListener("push", (event) => {
  event.waitUntil(
    (async () => {
      let data = {};
      try {
        data = event.data?.json?.() || {};
      } catch {}

      const title = data.title || "Seedy";
      const body = data.body || "";

      const latest = {
        title,
        body,
        tag: data.tag || null,
        data: data.data || data || null,
        receivedAt: new Date().toISOString(),
      };

      // Persist for UI (robust even if DB existed without store)
      try {
        const db = await openLatestPushDb();
        await dbPutLatest(db, latest);
      } catch (e) {
        // don't block notification if IDB fails
        console.warn("[sw] failed to store latest push", e);
      }

      // Show notification
      await self.registration.showNotification(title, {
        body: body || undefined,
        icon: "/icon-192.png",
        badge: "/icon-192.png",
        data,
      });

      // Tell any open pages to refresh their "Latest notification" card
      const clientsList = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      for (const c of clientsList) {
        c.postMessage({ type: "LATEST_PUSH_UPDATED" });
      }
    })(),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const urlToOpen =
    (event.notification?.data && event.notification.data.url) || "/";

  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      for (const client of allClients) {
        if ("focus" in client) return client.focus();
      }

      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })(),
  );
});

function openLatestPushDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(KV_STORE)) {
        db.createObjectStore(KV_STORE);
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbPutLatest(db, value) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(KV_STORE, "readwrite");
    tx.objectStore(KV_STORE).put(value, "latestPush");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
