import goTo from 'vuetify/es5/services/goto';

export default function(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = 0;
  let options = {
    duration: 600,
    offset: 0,
    easing: 'easeInOutCubic'
  };

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition.y;
  }

  const nuxt = window.$nuxt;

  // triggerScroll is only fired when a new component is loaded
  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (
          typeof window.CSS !== 'undefined' &&
          typeof window.CSS.escape !== 'undefined'
        ) {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = hash;
            options.offset = 100;
          }
        } catch (e) {
          console.warn(
            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
          );
        }
      }
      resolve(goTo(position, options));
    });
  });
}
