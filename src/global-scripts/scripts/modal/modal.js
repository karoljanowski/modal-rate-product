/// Sample js file for demo purposes
/// Remember to always export your functions
/// so that they can be used in other files

export function modal(element) {
  setTimeout(() => {
    element.style.display = 'flex'
  }, 3000)
  let boxes = document.querySelectorAll('.modal__box')
  let button = document.querySelector('.modal__button')
  let rate
  boxes.forEach(function (event) {

    event.addEventListener('click', function () {
      remove(boxes)
      event.classList.add('modal__box-selected')
      rate = event.textContent
      button.disabled = false

    })
  })
  button.addEventListener('click', function () {
    if (rate) {
      alert(`Dziękujemy, że oceniłeś produkt na ${rate}`)
      remove(boxes)
      button.disabled = true
      element.style.display = 'none'
    } else {
      alert('Error')
      button.disabled = true
    }
  })

}

function remove(element) {
  element.forEach(function (element) {
    element.classList.remove('modal__box-selected')
  })
}