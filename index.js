let body = document.querySelector("body");
let button = document.querySelector("#mode");
let logo = document.querySelector("#logo")
let curmode = "light";


function modechange()
{
  if(curmode === "light")
  {
    curmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    button.textContent = "LIGHT MODE";
    logo.src = "/pic/whitelogo.png";
  }else
  {
    curmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    button.textContent = "DARK MODE";
    logo.src = "/pic/logo1.png";
  }
}

button.addEventListener("click",modechange);

// ****************************************************audio**********************************************************************

// let boys = document.querySelector("#c1");
// boys.addEventListener("click",() => 
// {
//   document.querySelector("#bilala").playbackRate += 0.3;
//   document.querySelector("#bilala").play();
// });


let pics = document.querySelectorAll(".pic");
let audios = document.querySelectorAll(".audio");

for(let i=0;i<pics.length ;i++)
{
  // console.log(pics[i]);
  pics[i].addEventListener("click" ,() =>{
   let audio = audios[i];
   audio.playbackRate = 1.3;
   audio.play();
  })

}


//    let audio = audios[2];
// console.log(audio)



