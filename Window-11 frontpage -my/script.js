
taskbar = document.getElementsByClassName("taskbar")[0];
startmenu = document.getElementsByClassName("startMenu")[0];

taskbar.addEventListener('click',()=>{
  if(startmenu.style.bottom === "-650px")
  {
    startmenu.style.bottom = "50px";
  }
  else{
    startmenu.style.bottom = "-650px";
  }
})
