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
