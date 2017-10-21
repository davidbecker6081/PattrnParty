const addContentActive = (tab) => {
  $('.acc-content').each((i, elem) => {
    if ($(elem).hasClass(tab)) {
      $(elem).addClass('acc-content-active')
    }
  })
}

const resetClasses = (tab) => {
  $('.tab').each((i, tab) => {
    $(tab).removeClass('tab-active');
    $(tab).children('.fa').removeClass('fa-minus')
    $(tab).children('.fa').addClass('fa-plus')
    $(tab).parent().children('.acc-content').removeClass('acc-content-active')
  })
}

$('.tab').on('click', e => {
  const tab = $(e.target).hasClass('tab') ? $(e.target) : $(e.target).parent();
  const tabIsActive = tab.hasClass('tab-active');
  const tabText = tab.children('p').text().toLowerCase().replace(/\s/g, '');
  const isTab = tab.hasClass('tab');

  if (isTab) {
    resetClasses()
  }

  if (!tabIsActive && isTab) {
    tab.addClass('tab-active');
    tab.children('.fa').addClass('fa-minus');
    addContentActive(tabText)
  }
})
