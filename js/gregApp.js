'use strict';

function Horn(horn) {
  this.name = horn.title;
  this.image_url = horn.image_url;
  this.hobbies = horn.hobbies;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
  this.description = horn.description;
}

Horn.allHorns = [];

Horn.prototype.render = function () {
  let $templateClone = $('<div></div>');
  $templateClone.html($('#horn-template').html());
  
  $templateClone.find('h2').text(this.title);
  $templateClone.find('img').attr('src', this.image_url);
  $templateClone.find('p').text(this.description);
  $templateClone.attr('class', this.keyword);
  $('main').append($templateClone);
};

Horn.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Horn.allHorns.push(new Horn(item));
      });

      Horn.allHorns.forEach(horn => {
        $('main').append(horn.render());
      });

    })
    .then(Horn.populateFilter)
    .then(Horn.handleFilter);
};

Horn.populateFilter = () => {
  let filterKeywords = [];

  $('option').not(':first').remove();

  Horn.allHorns.forEach(image => {
    if (!filterKeywords.includes(horn.keyword)) filterKeywords.push(horn.keyword);
  });

  filterKeywords.sort();

  filterKeywords.forEach(keyword => {
    let optionTag = `<option value="${keyword}">${keyword}</option>`;
    $('select').append(optionTag);
  });
};

Horn.handleFilter = () => {
  $('select').on('change', function () {
    let $selected = $(this).val();
    if ($selected !== 'default') {
      $('div').hide();

      Horn.allHorns.forEach(horn => {
        if ($selected === horn.keyword) {
         $(`div[class="${$selected}"]`).addClass('filtered').fadeIn(); 
        }
      });

      $(`option[value=${$selected}]`).fadeIn();
    } else {
      $('div').removeClass('filtered').fadeIn();
      $(`option[value=${$selected}]`).fadeIn();
    }
  });
};

$(() => Horn.readJson());
