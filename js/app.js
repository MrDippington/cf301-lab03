'use strict';


function Horn(horn) {
  this.name = horn.name;
  this.image_url = horn.image_url;
  this.hobbies = horn.hobbies;
}
Horn.allHorns = [];

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
};


Horn.readJson = () => {
  $.get('data.json', 'json')
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
