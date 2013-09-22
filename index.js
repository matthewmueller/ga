/**
 * Expose `ga`
 */

module.exports = ga;

/**
 * Initialize `ga`
 *
 * @param {String} id
 * @return {ga}
 */

function ga(id) {
  var gaq = window._gaq = window._gaq || [];
  gaq.push(['_setAccount', id]);
  gaq.push(['_trackPageview']);
  load(url());
  return gaq;
}

/**
 * Get the url
 */

function url() {
  return ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
}

/**
 * Load the analytics script
 *
 * @param {String} url
 */

function load(url) {
  var first = document.getElementsByTagName('script')[0];
  var js = document.createElement('script');
  js.src = url;
  js.async = true;
  first.parentNode.insertBefore(js, first);
}
