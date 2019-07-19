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


Horn.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let hornClone = $('div[class="clone"]');
  let hornHtml = $('#horn-template').html(); // change in CSS

  hornClone.html(hornHtml);

  hornClone.find('h2').text(this.name);
  hornClone.find('img').attr('src', this.image_url).attr('alt', "alt text");
  hornClone.find('p').text(this.hobbies);
  hornClone.removeClass('clone');
  hornClone.attr('class', this.name);
  hornClone.attr('class', this.keyword);
  if (! Horn.allKeywords.includes(this.keyword)) {
    Horn.allKeywords.push(this.keyword);
    $('select').append(`'<option>${this.keyword}</option>'`);
  }
  // Horn.allKeywords.push(this.keyword);
  // for (let i=0; i<Horn.allKeywords.length; i++) {
  //   console.log(Horn.allKeywords[i]);
    
  // }
};

Horn.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Horn.allHorns.push( new Horn(item));
      });
    })
    //render to the dom
    .then(Horn.loadHorns);
};

Horn.loadHorns = () => {
  Horn.allHorns.forEach(horn => horn.render());
};

$(() => Horn.readJson());

console.log(Horn.allKeywords);
