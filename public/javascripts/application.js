$(document).ready(function(){

  // Load in content from local storage on page refresh
  $('.content[contenteditable="true"]').each(function(item){
        $(this).html(localStorage.getItem($(this).attr('id')));
  });

  // Save content to local storage on keyup
  $('.content[contenteditable="true"]').on('keyup', function(event){
    var content = $(this).html()
    localStorage.setItem($(this).attr('id'), content);
  });

  // Display detailed content when a month has focus
  $('.content[contenteditable="true"]').on('focus', function(event){
    
    $('.content[contenteditable="true"]').removeClass('focus-style');
    $(this).addClass('focus-style');

    // Create heading from timeline name and date
    var date = $(this).data('date');
    var timeline = localStorage.getItem($(this).data('timeline'));
    $('.heading-timeline').html(timeline + ": ");
    $('.heading-date').html(date);

    // Retreive detailed content from local storge
    var detailedContentID = $(this).attr('id') + '-detail';
    var detailedContent = localStorage.getItem(detailedContentID);

    // Display detailed content
    if (detailedContent == null ){ detailedContent = "<span class='placeholder-text'>Enter notes here&hellip;</span>" };
    if (detailedContent == "" ){ detailedContent = "<span class='placeholder-text'>Enter notes here&hellip;</span>" };
    $('.detailed-month-view .detailed-text').html(detailedContent).data('detailedContentID', detailedContentID);

  });

  // Save detailed content to local storage on keyup
  $('.detailed-text[contenteditable="true"]').on('keyup', function(event){
    var content = $(this).html()
    localStorage.setItem($(this).data('detailedContentID'), content);
  });

  // Remove placeholder text
  $('.detailed-text').on('click', function(event){
    $(this).find('.placeholder-text').remove();
    $(this).focus();
  });

});