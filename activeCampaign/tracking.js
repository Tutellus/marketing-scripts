;(function (e, t, o, n, p, r, i) {
  e.visitorGlobalObjectAlias = n
  e[e.visitorGlobalObjectAlias] =
    e[e.visitorGlobalObjectAlias] ||
    function () {
      ;(e[e.visitorGlobalObjectAlias].q =
        e[e.visitorGlobalObjectAlias].q || []).push(arguments)
    }
  e[e.visitorGlobalObjectAlias].l = new Date().getTime()
  r = t.createElement("script")
  r.src = o
  r.async = true
  i = t.getElementsByTagName("script")[0]
  i.parentNode.insertBefore(r, i)
})(
  window,
  document,
  "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js",
  "vgo"
)

vgo("setAccount", "28224030")
vgo("setTrackByDefault", true)
vgo("process")

// phone validation
if (no_error && elem.name == "phone") {
  if (
    !value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i) ||
    value.match(/^\D*(\d)(?:\D*|\1)*$/i)
  ) {
    elem.className = elem.className + " _has_error"
    no_error = false
    tooltip = create_tooltip(elem, "Introduce un número de teléfono correcto.")
  }
}
