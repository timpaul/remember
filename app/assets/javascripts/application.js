$(document).ready(function(){

  // Load in content from local storage on page refresh
  $('.content[contenteditable="true"]').each(function(item){
        $(this).html(localStorage.getItem($(this).attr('id')));
  });

  // Save content to local storage on keyup
  $('.content[contenteditable="true"]').on('keyup', function(event){
    var content = $(this).html()
    localStorage.setItem($(this).attr('id'), content);
    $('.detailed-month-view').html(content);
  });

  $('.content[contenteditable="true"]').on('focus', function(event){
    var content = $(this).html();
    var date = $(this).data('date');
    var timeline = localStorage.getItem($(this).data('timeline'));
    $('.detailed-month-view .heading-large').html(date);
    $('.detailed-month-view .heading-medium').html(timeline);
    $('.detailed-month-view .detailed-text').html(content);
  });

});