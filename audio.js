

let meditatingMusic = [
    { name: 'Calm Mind', url: '30-Minute-Deep-Sleep-Music(PaglaSongs).mp3' },
    { name: 'Peaceful Meditation', url: 'Deep-Breath-(Original-Mix)(PaglaSongs).mp3' },
    { name: 'Tranquil Serenity', url: 'Relaxation-Music(PaglaSongs).mp3' },
    { name: 'Peaceful music', url: 'Nostalgia-(Original-Mix)(PaglaSongs).mp3' },

  ];
  
  function init() {
    const audioList = document.getElementById('audioList');
  
    displayAudioList(audioList);
  }
  
  function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
  }
  
  function displayAudioList(container) {
 
    container.innerHTML = '';
    meditatingMusic.forEach((audio, index) => {
      const audioItem = document.createElement('div');
      audioItem.className = 'audio-item';
  
      const audioElement = document.createElement('audio');
      audioElement.controls = true;
      audioElement.src = audio.url;
  
      const playButton = document.createElement('button');
      
      playButton.onclick = () => playAudio(audio.url);  
  
      const removeButton = document.createElement('span');
      removeButton.className = 'remove-btn';
      removeButton.innerText = 'Remove';
      removeButton.onclick = () => removeAudio(index);
  
      audioItem.appendChild(audioElement);
      
      audioItem.appendChild(removeButton);
  
      container.appendChild(audioItem);
    });
  }
  
  function removeAudio(index) {
    meditatingMusic.splice(index, 1);
  
    const audioList = document.getElementById('audioList');
    displayAudioList(audioList);
  }
  
  init();
  