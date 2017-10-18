$(window).on('resize', () => {
  const window = $(this);
  if (window.width() < 600) {
    $('.acc-article').each((i, elem) => {
      $(elem).show()
      if ($(elem).hasClass('acc-article-active')) {
        $(elem).children('.tab').children('.fa').addClass('fa-minus')
        $(elem).children('.tab').children('.fa').removeClass('fa-plus')
      } else {
        $(elem).children('.tab').children('.fa').removeClass('fa-minus')
        $(elem).children('.tab').children('.fa').addClass('fa-plus')
      }
    })
  }
})

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

$('.tab-container').on('click', '.tab', (e) => {
  const tab = $(e.target).hasClass('tab') ? $(e.target) : $(e.target).parent();
  const tabText = $(tab).children().text()
  if (!$(tab).hasClass('tab-active')) {
    $('.tab').each((i, elem) => {
      $(elem).removeClass('tab-active')
    })
    $('.acc-article').each((i, elem) => {
      $(elem).children('.acc-content').removeClass('acc-content-active')
      $(elem).removeClass('acc-article-active')
      $(elem).hide()
      if ($(elem).children().children('p').text() === tabText) {
        $(elem).addClass('acc-article-active')
        $(elem).children('.acc-content').addClass('acc-content-active')
        $(elem).addClass('acc-article-active')
        $(elem).show()
      }
    })
    $(tab).addClass('tab-active')
  }
})
