
console.log("Init");

window.addEventListener('DOMContentLoaded', e => {
  let video = document.querySelector('video');

  video.addEventListener('click', e => {
    if(video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });



  let count = 0;
  let essay = document.getElementById('essay');

  let buttons = document.querySelectorAll('button');
  buttons.forEach(elt => {
    elt.addEventListener('click', e => {
      console.log('click');
      if(elt.name === 'Next') {
        console.log('down');
        count += 2360;
        essay.scrollTop = count;
      } else if(elt.name == 'Prev'){
        console.log('up');
        count -= 2360;
        essay.scrollTop = count;
      } else if(elt.name == 'Home') {
        count = 0;
        essay.scrollTop = count;
      }
    });
  });

});
