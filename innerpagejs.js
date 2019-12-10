
function play(x){
	
	var audio = document.getElementsByClassName("audio");
	for(i=0; i<audio.length; i++)
	{
		audio[i].pause();
		audio[i].currentTime = 0;
	}
	audio[x-1].play();
}