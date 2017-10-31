$('.header-bar-btn').on('click', e => {
  $(e.target).parent('.logo-menu').parent('.header-bar').children('.header-nav-search').toggleClass('header-active')
})

$(window).on('resize', (e) => {
  if ($(window)[0].innerWidth > 700) {
    $('.header-nav-search').removeClass('header-active')
  }
})
