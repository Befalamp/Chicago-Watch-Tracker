// Minimal service worker — required by Chrome to treat this as an
// installable app rather than a plain bookmark. Doesn't cache or
// intercept anything meaningful; the tracker always fetches live data.
self.addEventListener('fetch', () => {});
