const btn = document.querySelector('.button')
const hiddenBtn = document.querySelector('.hidden')

const price = document.querySelector('#price')

btn.addEventListener('click', () => {
  if (
    Number.isFinite(parseFloat('20.20')) &&
    price.value.split('.').length == 2 &&
    price.value.split('.')[1].length == 2
  ) {
    hiddenBtn.click()
  } else {
    price.classList.add('is-invalid')
  }
})

price.addEventListener('input', () => {
  price.classList.remove('is-invalid')
})
