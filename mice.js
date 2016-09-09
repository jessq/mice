// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	$('#speed').hide();
	$('#vcspeed').val(1);
	var elapsed = 0;
	var start = 0;

	var started = 'PAUSED';
	var exit = false;

	var lpaw = 0;
	var rpaw = 0;
	var droppedpasta = 0;
	var batontwirl = 0;
	var brokepasta = 0;
	var onehanded = 0;

	$('#speed').keyup(function (e) {
	    if (e.keyCode == 13) {
	    	var value = elapsed * $('#vspeed').val();
	    	value = Math.round(value * 100000) / 100000;

		    $('#time').text('Time elapsed: ' +  value + ' s');
	    }
	});

	$(document).keypress(function(e) {
		if (!exit) {
			if ($('#start').text() == 'STARTED') {
			    if(e.which == 97) {
			    	$('#translation tbody').append('<tr><td>' + '(+1) left paw' + '</td></tr>');
			    	lpaw += 1
			    };
			    if(e.which == 115) {
			    	$('#translation tbody').append('<tr><td>' + '(+1) right paw' + '</td></tr>');
			    	rpaw += 1
			    };
			    if(e.which == 100) {
			    	$('#translation tbody').append('<tr><td>' + '(-1) left paw' + '</td></tr>');
			    	lpaw -= 1
			    }
			    if(e.which == 102) {
			    	$('#translation tbody').append('<tr><td>' + '(-1) right paw' + '</td></tr>');
			    	rpaw -= 1
			    }
			    if(e.which == 113) {
			    	$('#translation tbody').append('<tr><td>' + 'dropped pasta' + '</td></tr>');
			    	droppedpasta += 1
			    }
			    if(e.which == 119) {
			    	$('#translation tbody').append('<tr><td>' + 'baton twirl' + '</td></tr>');
			    	batontwirl +=1
			    }
			    if(e.which == 101) {
			    	$('#translation tbody').append('<tr><td>' + 'broke pasta' + '</td></tr>');
			    	brokepasta += 1
			    }
			    if(e.which == 114) {
			    	$('#translation tbody').append('<tr><td>' + 'ate one-handed' + '</td></tr>');
			    	onehanded += 1
			    }
			}
		    if(e.which == 50) {
				var text = $('#start').text();
				if (text == 'STARTED') {
					$('#start').text('PAUSED');
					$('#translation tbody').append('<tr><td>' + 'PAUSED' + '</td></tr>');
					cur = new Date().getTime() / 1000;
					elapsed = elapsed + (cur - start);
					start = 0;
				} else {
					$('#start').text('STARTED');
					$('#translation tbody').append('<tr><td>' + 'STARTED' + '</td></tr>');
					start = new Date().getTime() / 1000;
				}
		    }
		    if(e.which == 49) {
		    	$('#translation tbody').append('<tr><td>' + 'exit' + '</td></tr>');
		    	exit = true;

				if (start != 0) {
					cur = new Date().getTime() / 1000;
					elapsed = elapsed + (cur - start);
				}

		    	$('#lpaw').text('Left paw: ' + lpaw);
		    	$('#rpaw').text('Right paw: ' + rpaw);
		    	$('#droppedpasta').text('Dropped pasta: ' + droppedpasta);
		    	$('#batontwirled').text('Baton twirled: ' + batontwirl);
		    	$('#brokepasta').text('Broke pasta: ' + brokepasta);
		    	$('#onehanded').text('Ate one-handed: ' + onehanded);
		    	$('#time').text('Time elapsed: ' + Math.round(elapsed * 100000) / 100000 + ' s');
		    	$('#speed').show();
		    }
		}
	});
});

function addRowL(start) {
	start = Math.round(start * 100000) / 100000
	$('#translation tbody').append('<tr><td>' + 'x' + '</td></tr>');
}

function addRowL(start) {
	start = Math.round(start * 100000) / 100000
	$('#translation tbody').append('<tr><td>' + 'x' + '</td></tr>');
}
