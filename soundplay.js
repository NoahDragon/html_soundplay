
$(document).ready(function(){
    var dir = 'sound/';
    var fileNum = 214
    var audioFile = []//new Audio(fileName + (Modernizr.audio.ogg ? '.ogg' : '.mp3'));
    for (var i = 0; i<= fileNum; i++){
	audioFile.push(new Audio(dir+(Modernizr.audio.mp3 ? 'mp3/':'ogg/')+i+(Modernizr.audio.mp3 ? '.mp3' : '.ogg')));
    }
    //var audioFilfore = new Audio('Canon_in_C.ogg');
    //audioFile.preload = "auto";
    //audioFile.load();
    //audioFile.play();
    //var dur = audioFile.duration;
    var position = 0;
    $('#navList').on('mouseenter','li',function(){
	if(position > fileNum){
	    position = 0;
	}
	audioFile[position].pause();
	audioFile[position].currentTime = 0;
	audioFile[position].play();
	position += 1;
	setTimeout(audioFile[position].pause(), 300);
    });
});
