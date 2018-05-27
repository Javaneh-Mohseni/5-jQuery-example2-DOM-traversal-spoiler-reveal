$('.spoiler').on('click', 'button', function(){
  console.log(event.target);
  $(event.target).prev().show();
  $(event.target).hide(); //instead of event.target, you can use the keyword "this"
});

//making our javascript code unobstrusive
//create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to webpage
$('.spoiler').append($button);
//if you use prepend instead of append, the element is added before the selected
//element
$('.spoiler span').hide();


//using on() for event handling
// $('#element').on('click keypress', function(){
//});
