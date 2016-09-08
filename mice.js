// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var elapsed = 0;
	var start = 0;

	$(document).keypress(function(e) {
		var button = $('#start').text();
		if (button == 'pause') {
		    if(e.which == 49) {
		    	var last = start;
		    	start = new Date().getTime() / 1000;
		    	elapsed = elapsed + (start - last)
		        addRowL(elapsed);
		    };
		    if(e.which == 50) {
		    	var last = start;
		    	start = new Date().getTime() / 1000;
		    	elapsed = elapsed + (start - last)
		        addRowR(elapsed);
		    };	
		}
	});

	$("#start").click(function(){
		var button = $('#start').text();
		if (button == 'start') {
			$('#start').text('pause');
			start = new Date().getTime() / 1000;
		} else {
			$('#start').text('start');
		}
    });
});

function addRowL(start) {
	start = Math.round(start * 100000) / 100000
	$('#translation tbody').append('<tr><td>' + 'x' + '</td><td>' + '' + '</td><td>' + start + ' s' + '</td></tr>');
}

function addRowR(start) {
	start = Math.round(start * 100000) / 100000
	$('#translation tbody').append('<tr><td>' + '' + '</td><td>' + 'x' + '</td><td>' + start + ' s' + '</td></tr>');
}
