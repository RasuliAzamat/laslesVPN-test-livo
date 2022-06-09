let mobileMenu = null

setInterval(() => {
  if (mobileMenu) {
    if (mobileMenu.classList.contains('visible')) {
      return (
        (document.documentElement.style.touchAction = 'none'),
        (document.documentElement.style.overflow = 'hidden')
      )
    }
    return (
      (document.documentElement.style.touchAction = 'auto'),
      (document.documentElement.style.overflow = 'auto')
    )
  }
  return (mobileMenu = document.querySelector('.mobile-menu'))
})
