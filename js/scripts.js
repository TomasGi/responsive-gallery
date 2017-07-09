// call main menu - start
const menuButton1 = document.querySelector('.main-menu-button1')
const menuButton2 = document.querySelector('.main-menu-button2')
const mainMenu = document.querySelector('.main-menu')
const menuItems = document.querySelectorAll('.list-items li')
const menuItem = Array.from(document.querySelectorAll('.list-items li a'))
let toggledMenu = false

function toggleClass() {
  console.log('toggling')
  mainMenu.classList.toggle('run')
  toggledMenu = false
}

menuButton1.addEventListener('click', function () {
  console.log('clicked menuButton1')
  toggledMenu = true
  toggleClass()
})

menuButton2.addEventListener('click', function () {
  console.log('clicked menuButton2')
  toggledMenu = true
  toggleClass()
})

menuItems.forEach(menuItem => menuItem.addEventListener('click', function () {
  console.log('clicked menu item')
  toggleClass()
}))
// call main menu - end

// call description - start
const image = document.querySelectorAll('.content')
const infoButton = Array.from(document.querySelectorAll('#images .content .info-button'))
const description = Array.from(document.querySelectorAll('#images .content .description'))
let toggledInfo = false

function callMenu(element) {
  if (toggledInfo) {
    let size = (element.getAttribute('data-info') - 1) * 100
    console.log(size);
    element.querySelector('.description').classList.toggle('run')
    if (document.getElementById("body").clientWidth > 768) {
      element.querySelector('.description').style.top = `${size + 30}vh`
    } else {
      element.querySelector('.description').style.left = `${size}vw`
    }
    toggledInfo = false
  }
}

image.forEach(infoButton => infoButton.addEventListener('click', function () {
  let element = infoButton
  console.log(element)
  toggledInfo = true
  callMenu(element)
}))

