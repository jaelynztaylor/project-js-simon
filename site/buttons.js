$('.simon-button.green').on('click', function() {
  console.log(this);
  $(this).addClass('waffles');
});
$('.simon-button.blue').on('click', function() {
  alert('You clicked the blue button');
});

$('.simon-button.yellow').on('click', function() {
  console.log(this);
  $(this).addClass('waffles');
});

$('.simon-button.red').on('click', function() {
  alert('You clicked the red button');
});
