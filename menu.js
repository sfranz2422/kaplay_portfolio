scene("menu",() =>{

//   add([
//   text("menu"),
//   pos(24, 24),
// ])

go("game")




  // Example Kaboom game object
  add([
      text("Press 'T' to show/hide textbox", { size: 24 }),
      pos(20, 20),
  ]);



  const textbox = document.getElementById("textbox");

  onKeyPress("t", ()=>{
    textbox.innerHTML = "<h1>Franz</h1>"
    
    if (textbox.style.display === "none") {
      textbox.style.display = "block";
    } else {
      textbox.style.display = "none";
    }
  })
  
})






































