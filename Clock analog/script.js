let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');

// theta of hour = (30*hr + (1/2)*m)
// theta of minutes = 6*m +(1/10)*s ;
// seconds = 6*s;


setInterval(()=>{
  let  hr0 = new Date().getHours();
  let  min0 = new Date().getMinutes();
  let  sec0 = new Date().getSeconds();
  hr.style.transform = `rotate(${30*hr0 + (1/2)*min0}deg)`;
  min.style.transform = `rotate(${6*min0 + (1/2)*sec0}deg)`;
  sec.style.transform = `rotate(${6*sec0}deg)`;
},1000)