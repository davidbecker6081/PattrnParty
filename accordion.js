//if Tab2 is active, turn off border-right for Tab1
//if Tab3 is active, turn off border-right for Tab2
//if Tab4 is active, turn off border-right for Tab3

$('.mobile-tab').on('click', (e) => {
  const selectedArticle = $(e.target).parent().find('.acc-content');
  const selectedTabBtn = $(e.target).find('.fa')

  if (selectedArticle.hasClass('acc-content-active')) {
    selectedArticle.removeClass('acc-content-active')
    selectedTabBtn.addClass('fa-plus')
    selectedTabBtn.removeClass('fa-minus')
  } else {
    $('.acc-content-active').each((i, elem) => {
      $(elem).removeClass('acc-content-active')
      $(elem).parents().find('.fa').addClass('fa-plus')
      $(elem).parents().find('.fa').removeClass('fa-minus')
    })
    selectedArticle.addClass('acc-content-active')
    selectedTabBtn.addClass('fa-minus')
    selectedTabBtn.removeClass('fa-plus')
  }
})
