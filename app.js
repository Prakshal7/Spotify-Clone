console.log("Welcome to Spotify");

let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs =[
  {songName: "Salam-e-Ishq",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\1.mp3", coverPath:"covers/1.jpg"},
    {songName: "xy",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\2.mp3", coverPath:"covers/2.jpg"},
      {songName: "dwex",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\3.mp3", coverPath:"covers/3.jpg"},
        {songName: "wer2r",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\4.mp3", coverPath:"covers/4.jpg"},
          {songName: "were",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\5.mp3", coverPath:"covers/5.jpg"},
            {songName: "tgtg",filepath:"C:\Users\Lenovo\OneDrive\Documents\Spotify S\songs\6.mp3", coverPath:"covers/6.jpg"},
]

songItems.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src= songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

masterPlay.addEventListener('click',()=>
{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
   gif.style.opacity = 0;
  }
})

audioElement.addEventListener('timeupdate',()=>
{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

  myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');

  })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songindex>=6){
    songindex = 0
  }
  else{
    songindex+=1;
  }
audioElement.src = `songs/${songindex}.mp3`;
  masterSongName.innerText = songs[songindex-1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songindex<=0){
    songindex = 0
  }
  else{
    songindex-=1;
  }
  audioElement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
