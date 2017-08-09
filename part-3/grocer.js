document.addEventListener("DOMContentLoaded", function(event) {
  const cartItems = document.querySelector('.cart-items')
  let cart = []

  const addItem = (event) => {
    const parentElement = event.target.parentNode.innerText
    const item = parentElement.split('\n').slice(0,2)
    cartModal(item)
    cart.push({price: Number(item[1].slice(1))})
    cartCounter()
  }

  const cartCounter = () => {
    document.querySelector('.cart-item-count').innerText = `(${cart.length})`
    document.querySelector('.cart-total-price').innerText = '$' + total(cart)
  }

  const cartModal = (item) => {
    cartItems.appendChild( document.createElement('div') ).className = "cartItem-row flex flex-row-between"
    const cartItemRow = document.querySelectorAll('.cartItem-row')
    const lastrow = cartItemRow[cartItemRow.length - 1]
    lastrow.appendChild( document.createElement('span') ).innerText = item[0]
    lastrow.appendChild( document.createElement('span') ).innerText = item[1]
  }

  const modal = document.querySelector('.modal')
  const modalOpenButton = document.querySelector('.modal-open-button')
  const modalCloseButton = document.querySelector('.modal-close-button')
  modalOpenButton.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.add('modal-open')
  })

  modalCloseButton.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove('modal-open')
  })

  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      event.preventDefault()
      modal.classList.remove('modal-open')
    }
  })

  const total = (cartArray) => {
    let totalPrice = 0
    for (var i = 0; i < cartArray.length; i++) {
      totalPrice = totalPrice + cartArray[i].price
    }
    return totalPrice.toFixed(2)
  }

  const clearCartButton = (event) => {
    while(cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild)
    }
    cart = []
    cartCounter()
  }

  document.querySelectorAll('.item button').forEach( element => element.addEventListener('click', addItem) )
  document.querySelector('#clear-cart-button').addEventListener('click', clearCartButton)
})
