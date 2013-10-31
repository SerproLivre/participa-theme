(function($) {

  // Adds a link to block title - can't do that on noosfero because of
  // field size and html escape
  var tags_block = $('.action-home-index .tags-block');
  var footer = $('#theme-footer');

  footer.prepend(tags_block);
})(jQuery);
