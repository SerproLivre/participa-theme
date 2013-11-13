/*
(function($) {

  // Adds a link to block title - can't do that on noosfero because of
  // field size and html escape
  var tags_block = $('.action-home-index .tags-block');
  var footer = $('#theme-footer');
  var blocks_area = $('#box-1 .blocks');

  circles_blocks_div = $('<div>',{ id : 'circles-blocks'});
  circles_blocks_div_inner = $('<div>',{ class : 'home-blocks-inner'});
  circles_blocks_div.prepend(circles_blocks_div_inner);
  circles_blocks_div_inner.prepend($('.action-home-index #box-1 .raw-html-block'));

  highlight_article_blocks_div = $('<div>',{ id : 'highlight-article-blocks'});
  highlight_article_blocks_div_inner = $('<div>',{ class : 'home-blocks-inner'});
  highlight_article_blocks_div.prepend(highlight_article_blocks_div_inner);
  highlight_article_blocks_div_inner.prepend($('.action-home-index #box-1 .article-block'));


  statistics_blocks_div = $('<div>',{ id : 'statistics-blocks'});
  statistics_blocks_div_inner = $('<div>',{ class : 'home-blocks-inner'});
  statistics_blocks_div.prepend(statistics_blocks_div_inner);
  statistics_blocks_div_inner.prepend($('.action-home-index #box-1 .statistics-block'));

  var display_content_blocks = $('.action-home-index #box-1 .display-content-block');
  content_blocks_div = $('<div>',{ id : 'content-blocks'});
  content_blocks_div_inner = $('<div>',{ class : 'home-blocks-inner'});
  content_blocks_div.prepend(content_blocks_div_inner);
  display_content_blocks.each(function() {
     var element = $(this);
     content_blocks_div_inner.prepend(element);
  });

  profile_blocks_div = $('<div>',{ id : 'profile-blocks'});
  profile_blocks_div_inner = $('<div>',{ class : 'home-blocks-inner'});
  profile_blocks_div.prepend(profile_blocks_div_inner);
  profile_blocks_div_inner.prepend($('.action-home-index #box-1 .communities-block'));
  profile_blocks_div_inner.prepend($('.action-home-index #box-1 .display-people-block'));

  blocks_area.prepend(profile_blocks_div);
  blocks_area.prepend(content_blocks_div);
  blocks_area.prepend(statistics_blocks_div);
  blocks_area.prepend(highlight_article_blocks_div);
  blocks_area.prepend(circles_blocks_div);

  footer.prepend(tags_block);
})(jQuery);
*/

(function($) {
  // Run code
	$( ".block-inner-1 .block-inner-2 .box .block-outer .communities-block" ).parent().addClass( "mapa_comunidades" );
})(jQuery);



