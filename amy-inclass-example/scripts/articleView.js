'use strict';

let articleView = {};

articleView.populateFilters = () => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = () => {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = () => {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = () => {
  $('nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};





// COMMENT: Where is this function called? Why?
// This function is being called on new.html to allow the
articleView.initNewArticlePage = () => {
  //DIFFERENT ->
  // let newTemplate = Handlebars.compile($('#new-article-template').text());
  // <- DIFFERENT

  // TODO: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.


  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  //DIFFERENT ->
  $('#article-export').hide();
  // <- DIFFERENT


  //SAME
  $('#article-json').on('focus', function(){
    this.select();
    //DIFFERENT
    //document.execCommand('copy');
  });

  // DONE: Add an event handler to update the preview and the export field if any inputs change.
  $('#new-form').on('change', 'input', 'textarea', articleView.create);

  //DIFFERENT ->
  // return newTemplate(this);
  // <-DIFFERENT
};




//This will be our callback for when we change focus on the new page
articleView.create = () => {
  console.log ('is this even working? AUGH!!!!')
  // TODO: Set up a variable to hold the new article we are creating.
  // let newPost = [];
  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').html('');

  // DONE: Instantiate an article based on what's in the form fields:
  let newArticle = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-authorUrl').val(),
    category: $('#article-category').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null,
  });


  //SAME
  // DONE: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#articles').append(newArticle.toHtml()); //and append it like on line 121 so all NEW ones show

  //DIFFERENT ->
  // newPost.forEach(articleObject => newArticle.push(new Article(articleObject)))
  // newPost.forEach(articleElement => $('#articles').append(articleElement.toHtml()));

  // $('#articles').fadeIn(750);
  // <- DIFFERENT

  // TODO: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  // TODO: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  //it changed on the focus - look for events

};




// COMMENT: Where is this function called? Why?
// PUT YOUR RESPONSE HERE
articleView.initIndexPage = () => {
  articles.forEach(articleElement => $('#articles').append(articleElement.toHtml()));
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
