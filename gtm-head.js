// Asegúrate de incluir el archivo JavaScript en tu archivo HTML utilizando la etiqueta <script> antes de incluir este código:
// <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TRSCXQ&amp;gtm_cookies_win=x"></script>

// gtm-script.js
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag("js", new Date())
gtag("config", "GTM-TRSCXQ", {
  anonymize_ip: true,
  cookie_expires: 0,
  cookie_flags: "max-age=0;secure;samesite=none",
})
gtag("consent", "default", {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  security_storage: "denied",
})
