     var dc;
     var g;
     var v;
     var my_graph;
     var my_area;

     var current_time = 0;
    //when the document is done loading, intialie the video events listeners
     $(document).ready(function () {
         v = document.getElementsByTagName('video')[0];
         v.onseeking = function () {
                 current_time = v.currentTime * 1000;
                 draw_marker();
             };
         
         v.oncanplay = function () {
             CreateGraph();             
             };
                  
         v.addEventListener('timeupdate', function (event) {
             var t = document.getElementById('time');
             t.innerHTML = v.currentTime;
             g.updateOptions({
                 isZoomedIgnoreProgrammaticZoom: true
             });
             
             current_time = v.currentTime * 1000;
         }, false);         
     });

     function change_movie_position(e, x, points) {
         v.currentTime = x / 1000;
     }

     function draw_marker() {
         dc.fillStyle = "rgba(255, 0, 0, 0.5)";
         var left = my_graph.toDomCoords(current_time, 0)[0] - 2;
         var right = my_graph.toDomCoords(current_time + 2, 0)[0] + 2;
         dc.fillRect(left, my_area.y, right - left, my_area.h);
     };


    //data creation
     function CreateGraph() {
         number_of_samples = v.duration * 1000;
         // A basic sinusoidal data series.
         var data = [];
         for (var i = 0; i < number_of_samples; i++) {
             var base = 10 * Math.sin(i / 90.0);
             data.push([i, base, base + Math.sin(i / 2.0)]);
         }

         // Shift one portion out of line.
         var highlight_start = 450;
         var highlight_end = 500;
         for (var i = highlight_start; i <= highlight_end; i++) {
             data[i][2] += 5.0;
         }

         g = new Dygraph(
         document.getElementById("div_g"),
         data, {
             labels: ['X', 'Est.', 'Actual'],
             animatedZooms: true,
             underlayCallback: function (canvas, area, g) {
                 dc = canvas;
                 my_area = area;
                 my_graph = g;
                 bottom_left = g.toDomCoords(0, 0);
                 top_right = g.toDomCoords(highlight_end, +20);
                 draw_marker();
             }
         });

         g.updateOptions({
             clickCallback: change_movie_position
         }, true);

     }
