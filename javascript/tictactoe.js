// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global console: true, _: true */

var main = function () {
    "use strict";

    var indices = [1,2,3,4,5,6,7,8,9];
    var player = "x";

    function drawX(n, that) {
        var draw = $("#draw" + n)[0].getContext("2d");
        draw.moveTo(0,0);
        draw.lineTo(400, 200);
        draw.stroke();
        draw.moveTo(300, 0);
        draw.lineTo(-500, 400);
        draw.stroke();
        $(that).addClass("takenByX").removeClass("emptyTile");
    }

    function drawO(n, that) {
        var draw = $("#draw" + n)[0].getContext("2d");
        draw.beginPath();
        draw.arc(150, 75, 75, 0, 2 * Math.PI);
        draw.closePath();
        draw.fill();
        $(that).addClass("takenByO").removeClass("emptyTile");
    }

    function clickListener(indices) {
        _.each(indices, function (n) {
            $(".tictactoe").on("click", "#draw" + n, function () {
                var that = $(this);

                if ($(this).hasClass("emptyTile")) {
                    if (player === "x") {
                        drawX(n, that);
                        player = "o";
                    }
                    else {
                        drawO(n, that);
                        player = "x";
                    }
                }
                else {
                    console.log("Already used tile", n);
                }

            });
        });
     }

     clickListener(indices);
};

$(document).ready(main);
