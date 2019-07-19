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
Horn.allKeywords = [];

const hornCollection = () => {
  Horn.allKeywords.forEach((currentHorn) => {
    if (!currentHorn.includes() Horn.allKeywords){
      arr.pop();
    }
    return hornCollection;
  });
};

Horn.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let hornClone = $('div[class="clone"]');

  let hornHtml = $('#horn-template').html(); // change in CSS

  hornClone.html(hornHtml);

  hornClone.find('h2').text(this.name);
  hornClone.find('img').attr('src', this.image_url).attr('alt', this.description);
  hornClone.find('p').text(this.hobbies);
  hornClone.removeClass('clone');
  hornClone.attr('class', this.name);
  hornClone.attr('class', this.keyword);
  Horn.allKeywords.push(this.keyword);
};

Horn.addToDropdown = () => {
  $.Horn.allKeywords;
};

Horn.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Horn.allHorns.push(new Horn(item));
      });
    })
    //render to the dom
    .then(Horn.loadHorns);
};

Horn.loadHorns = () => {
  Horn.allHorns.forEach(horn => horn.render());
};
console.log(Horn.allHorns);
console.log(Horn.allKeywords);
$(() => Horn.readJson());

