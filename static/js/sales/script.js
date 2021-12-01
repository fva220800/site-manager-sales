const btn = document.querySelector('.button')
const hiddenBtn = document.querySelector('.hidden')

const product = document.querySelector('#product')
const count = document.querySelector('#count')
const price = document.querySelector('#price')

const priceHidden = document.querySelectorAll('.priceHidden')

document.addEventListener('change', () => {
  if (count.value) {
    for (let i = 0; i < product.options.length; i++) {
      if (product.options[i].selected) {
        price.value = (priceHidden[i].value * count.value).toFixed(2)
      }
    }
  } else {
    price.value = '0.00'
  }
})

btn.addEventListener('click', () => {
  hiddenBtn.click()
})
