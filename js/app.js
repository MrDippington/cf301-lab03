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
  let hornClone = $('<div></div>');
  let hornHtml = $('#horn-template').html(); // change in CSS
  
  hornClone.html(hornHtml);
  
  hornClone.find('h2').text(this.name);
  hornClone.find('img').attr('src', this.image_url).attr('alt', this.description);
  hornClone.find('p').text(this.hobbies);
  hornClone.removeClass('clone');
  // hornClone.attr('class', this.name);
  hornClone.attr('class', this.keyword);
  $('main').append(hornClone);
  if (! Horn.allKeywords.includes(this.keyword)) {
    Horn.allKeywords.push(this.keyword);
    $('select').append(`<option>${this.keyword}</option>`);
  }
};
let fileName = '../data/page-1.json'
Horn.readJson = (fileName) => {
 
  $.get(fileName, 'json')
    .then(data => {
      data.forEach(item => {
        console.log(Horn.allHorns);
        Horn.allHorns.push(new Horn(item));
        
      });
      console.log(Horn.allHorns);
      Horn.allHorns.forEach(horn => {
        $('main').append(horn.render());
      })
    })
    
    // .then(Horn.loadHorns);
};

// Horn.loadHorns = () => {
//   Horn.allHorns.forEach(horn => {
//     $('main').append(horn.render());
//   })
// };


$('select').on('change',selShow);
function selShow(){
  let selItem=$(this).val();
  $('div').hide();
  $('div[class = "'+selItem+'"]').show();
}

$( "#buttonOne" ).click(function() {
  Horn.allHorns = [];
  Horn.allKeywords = [];
  $('div').remove();
  $('option').remove();
  fileName = '../data/page-1.json'
  $(() => Horn.readJson(fileName));
});

$( "#buttonTwo" ).click(function() {
  Horn.allHorns = [];
  Horn.allKeywords = [];
  $('div').remove();
  $('option').remove();
  fileName = '../data/page-2.json'
  $(() => Horn.readJson(fileName));
});
$(() => Horn.readJson(fileName));
