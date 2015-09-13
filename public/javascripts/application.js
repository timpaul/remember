$(document).ready(function(){

  // Load in content from local storage on page refresh
  $('.content[contenteditable="true"]').each(function(item){
        $(this).html(localStorage.getItem($(this).attr('id')));
  });

  // Save content to local storage on keyup
  $('.content[contenteditable="true"]').on('keyup', function(event){
    localStorage.setItem($(this).attr('id'), $(this).html());
  });


});