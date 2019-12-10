
function play(x){
	
	var audio = document.getElementsByClassName("audio");
	var img = document.getElementsByClassName("Image");
	for(i=0; i<audio.length; i++)
	{
		audio[i].pause();
		audio[i].currentTime = 0;
		img[i].classList.remove("animated");
		img[i].classList.remove("tada");
		img[i].classList.remove("infinite");
		img[i].classList.remove("slow");
	}
	audio[x-1].play();
	img[x-1].classList.add("animated");
	img[x-1].classList.add("tada");
	img[x-1].classList.add("infinite");
	img[x-1].classList.add("slow");
}