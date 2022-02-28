const btn = document.querySelector('.button')
const hiddenBtn = document.querySelector('.hidden')

btn.addEventListener('click', () => {
  hiddenBtn.click()
})
