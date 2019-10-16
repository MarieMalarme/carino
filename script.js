const timeContainer = document.getElementById('time')

const timer = () => {
  const now = new Date()
  const DDay = new Date('October 19, 2019 22:45:00')
  timeContainer.innerHTML = formatedDuration((DDay - now) / 1000)
}

setInterval(timer, 1000)

const padStart0 = s => s.toString().padStart(2, '0')
const formatedDuration = seconds => {
  const h = Math.floor(seconds / 3600)
  const min = Math.floor((seconds % 3600) / 60)
  const sec = Math.floor(seconds % 60)
  const time = `${padStart0(h)}:${padStart0(min)}:${padStart0(sec)}`
  return time
}

document.addEventListener('mousemove', e => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  const gradient = document.getElementById('gradient')

  const getColors = coord =>
    `${coord / 2},
      ${coord / 6}%,
      60%`

  gradient.style.background = `linear-gradient(0.15turn, hsl(${getColors(
    mouseX,
  )}), hsl(${getColors(mouseY)}))`
})
