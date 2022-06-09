let mobileMenu = null

setInterval(() => {
  if (mobileMenu) {
    if (mobileMenu.classList.contains('visible')) {
      return (document.body.style.overflow = 'hidden')
    }
    return (document.body.style.overflow = 'auto')
  }
  return mobileMenu = document.querySelector('.mobile-menu')
})
