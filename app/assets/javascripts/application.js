$(document).ready(function(){

  // Load in content from local storage on page refresh
  $('.content[contenteditable="true"]').each(function(item){
        $(this).html(localStorage.getItem($(this).attr('id')));
  });

  $(".detailed-month-view").hide();

  // Save content to local storage on keyup
  $('.content[contenteditable="true"]').on('keyup', function(event){
    var content = $(this).html()
    localStorage.setItem($(this).attr('id'), content);
  });

  $('.content[contenteditable="true"]').on('focus', function(event){
  	$(".detailed-month-view").show();
    var content = $(this).html();
    var detailedContentID = $(this).attr('id') + '-detail'
    var detailedContent = localStorage.getItem(detailedContentID);
    var date = $(this).data('date');
    var timeline = localStorage.getItem($(this).data('timeline'));
    $('.detailed-month-view .heading-large .heading-timeline').html(timeline);
    $('.detailed-month-view .heading-large .heading-date').html(date);
    if (detailedContent == null){ detailedContent = "Type here..." };
    $('.detailed-month-view .detailed-text').html(detailedContent).data('detailedContentID', detailedContentID);

  });

  // Save detailed content to local storage on keyup
  $('.detailed-text[contenteditable="true"]').on('keyup', function(event){
    var content = $(this).html()
    localStorage.setItem($(this).data('detailedContentID'), content);
  });

});