$(document).ready(function(){
  $('.slider').slider({interval:10000});
  $('.sidenav').sidenav({edge:'right'});
  $('.like').on('click', function(){
    if ($(this).text() == 'favorite') {
      $(this).text('favorite_border');
      $(this).addClass('black-text').removeClass('red-text')
      M.toast({html: '<i class="material-icons green-text">check</i> &nbsp;'+'فیلم مورد نظر از لیست علاقه مندی ها خارج شد','displayLength':10000})
    } else {
      $(this).text('favorite');
      $(this).addClass('red-text').removeClass('black-text')
      M.toast({html: '<i class="material-icons green-text">check</i> &nbsp;'+'فیلم مورد نظر به لیست علاقه مندی ها شد . لایک های شما باعث میشود رتبه فیلم بالاتر برود','displayLength':10000})
    }
  });
  $('.bookmark').on('click', function(){
    if ($(this).text() == 'bookmark') {
      $(this).text('bookmark_border');
      $(this).addClass('black-text').removeClass('orange-text')
      M.toast({html: '<i class="material-icons green-text">check</i> &nbsp;'+'فیلم مورد نظر از نشانه گذاری خارج شد','displayLength':10000})
    } else {
      $(this).text('bookmark');
      $(this).addClass('orange-text').removeClass('black-text')
      M.toast({html: '<i class="material-icons green-text">check</i> &nbsp;'+'فیلم مورد نظر نشانه گذاری شد . میتوانید فیلم های ذخیره شده را در پروفایل خود مشاهده کنید','displayLength':10000})
    }
  });
  $('.share').on('click', function(){
    $(this).css('color', '#2196f3')
  });
  $('.buy').on('click', function(){
    M.toast({html: '<i class="material-icons green-text">check</i> &nbsp;'+'بلیط با موفقیت تهیه شد'})
  });
});