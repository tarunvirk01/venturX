// waiting for the document to load
$(document).ready(function () {
  // getting the div and creating the charts
   $('#pie-1').pieChart({
       barColor: 'yellowgreen',
       trackColor: '#eee',
       lineCap: 'round',
       lineWidth: 10,
       onStep: function (from, to, percent) {
           $(this.element).find('.pie-value').text('');
       }
   });
   $('#pie-2').pieChart({
       barColor: 'yellowgreen',
       trackColor: '#eee',
       lineCap: 'round',
       lineWidth: 10,
       onStep: function (from, to, percent) {
           $(this.element).find('.pie-value');
       }
   });
   $('#pie-3').pieChart({
       barColor: 'yellowgreen',
       trackColor: '#eee',
       lineCap: 'round',
       lineWidth: 10,
       onStep: function (from, to, percent) {
           $(this.element).find('.pie-value').text('');
       }
   });
   $('#pie-4').pieChart({
       barColor: 'lightgreen',
       trackColor: '#eee',
       lineCap: 'round',
       lineWidth: 10,
       onStep: function (from, to, percent) {
           $(this.element).find('.pie-value').text('');
       }
   });
 });
