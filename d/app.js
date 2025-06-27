const inpt1 = /** @type HTMLInputElement */ (document.querySelector('.inpt1'))
const inpt2 = /** @type HTMLInputElement */ (document.querySelector('.inpt2'))
const anchor = /** @type { HTMLAnchorElement } */ (document.querySelector('.a'))

const leaflet = document.querySelector(".leaflet")
const map = L.map(leaflet).setView(decode('0', '0'), 17);
const marker = L.marker(decode('0', '0')).addTo(map)
console.log(marker)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


import { decode } from "../calc.js"

const refreshHref = () => {
    const a = inpt1.value || 0
    const b = inpt2.value || 0

    const [x, y] = decode(a, b)

    anchor.href = `https://www.google.com/maps/search/?api=1&query=${ x },${ y }`

    map.setView([x, y], 26);
    marker.setLatLng([ x, y ])
}

inpt1.addEventListener('input', () => {
    refreshHref()
})

inpt2.addEventListener('input', () => {
    refreshHref()
})


