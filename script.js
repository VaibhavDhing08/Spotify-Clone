
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let songItems = document.getElementById('songItems');

let songs = [
    {songName: "Afreen Afreen",   filePath: "song/1.mp3",      coverPath: "Cover/1.jpg"},
    {songName: "All I Ever Wanted",   filePath: "song/2.mp3",  coverPath: "Cover/2.jpeg"},
    {songName: "All We Know",   filePath: "song/3.mp3",        coverPath: "Cover/3.png"},
    {songName: "Besabriyaan",   filePath: "song/4.mp3",        coverPath: "Cover/4.jpg"},
    {songName: "Bollywood Mashup",   filePath: "song/5.mp3",   coverPath: "Cover/5.jpg"},
    {songName: "Bolna",   filePath: "song/6.mp3",              coverPath: "Cover/6.jpg"},
    {songName: "Enchanted",   filePath: "song/7.mp3",          coverPath: "Cover/7.webp"},
]

// songItems.forEach((element)=>{
//      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//      element.getElementByClassName("songName")[0].innerText = songs[i].songName;

// })

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
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


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         index = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = 'song/$(index).mp3';
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })