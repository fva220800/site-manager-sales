const login = document.querySelector('#floatingInput')
const password = document.querySelector('#floatingPassword')

const hiddenInput = document.querySelectorAll('.hiddenInput')
const hiddenPassword = document.querySelectorAll('.hiddenPassword')

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  let flag = false

  for (let i = 0; i < hiddenInput.length; i++) {
    if (
      hiddenInput[i].value == login.value &&
      hiddenPassword[i].value == password.value
    ) {
      flag = true
      window.location.href = '/firms'
    }
  }

  if (!flag) {
    login.classList.add('is-invalid')
    password.classList.add('is-invalid')
  }
})

window.addEventListener('input', () => {
  login.classList.remove('is-invalid')
  password.classList.remove('is-invalid')
})
