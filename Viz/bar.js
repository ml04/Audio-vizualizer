var player = document.getElementById('player');    
		player.addEventListener("timeupdate", function() {
		    var currentTime = player.currentTime;
		    var duration = player.duration;
		    $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
		});