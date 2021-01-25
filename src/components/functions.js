export const colors = [
  "white",
  "#fff4c1",
  "#b1dcff",
  "#34ebba",
  "#ffc1cc",
  "#c1ccff",
  "#ffd5c1",
  "#c1fff4",
  "#c1fff4",
  "#eb5e34",
  "#34c1eb",
]

export function randColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

export function onMouseOver(event) {
  const el = event.target
  el.style["background-color"] =
    colors[Math.floor(Math.random() * colors.length)]
  el.style.color = "black"
}

export function onMouseOut(event) {
  const el = event.target
  el.style["background-color"] = "black"
  el.style.color = colors[Math.floor(Math.random() * colors.length)]
}

export function slug(str) {
  return str.replace(/\s+/g, "-").toLowerCase()
}
