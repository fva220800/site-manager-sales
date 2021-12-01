const btn = document.querySelector('.button')
const hiddenBtn = document.querySelector('.hidden')

const hiddenName = document.querySelectorAll('.hiddenName')

const name = document.querySelector('#name')
const number = document.querySelector('#number')
const address = document.querySelector('#address')

let check = true
const hiddenCheck = document.querySelector('.hiddenCheck')

btn.addEventListener('click', () => {
  check = true

  for (let i = 0; i < hiddenName.length; i++) {
    if (hiddenName[i].value == name.value && name.value != hiddenCheck.value) {
      check = false
      break
    }
  }

  if (check && name.value.split(' ').length == 3) {
    if (
      (!Number.isFinite(+number.value.split('')[0]) &&
        !Number.isFinite(+number.value.split('')[1]) &&
        Number.isFinite(+number.value.split('')[2]) &&
        Number.isFinite(+number.value.split('')[3]) &&
        Number.isFinite(+number.value.split('')[4]) &&
        Number.isFinite(+number.value.split('')[5]) &&
        Number.isFinite(+number.value.split('')[6]) &&
        Number.isFinite(+number.value.split('')[7]) &&
        Number.isFinite(+number.value.split('')[8])) ||
      number.value == ''
    ) {
      if (
        address.value.split(' ').length == 4 &&
        Number.isFinite(+address.value.split(' ')[3])
      ) {
        hiddenBtn.click()
      } else {
        address.classList.add('is-invalid')
      }
    } else {
      number.classList.add('is-invalid')
    }
  } else {
    name.classList.add('is-invalid')
  }
})

name.addEventListener('input', () => {
  name.classList.remove('is-invalid')
})

number.addEventListener('input', () => {
  number.classList.remove('is-invalid')
})

address.addEventListener('input', () => {
  address.classList.remove('is-invalid')
})
